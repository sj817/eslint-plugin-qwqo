import { ESLint, type Linter } from 'eslint'
import { describe, expect, it } from 'vitest'

import lintspec, { type LintspecOptions } from '../src/index'

/** 用指定配置对内联代码执行 lint，返回触发的规则 ID 列表。 */
async function lint (options: LintspecOptions, filePath: string, code: string): Promise<string[]> {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: lintspec(options) as Linter.Config[],
  })
  const [result] = await eslint.lintText(code, { filePath })
  return result.messages.map(message => message.ruleId ?? `fatal:${message.message}`)
}

/** 用完整 fixer 处理内联代码，返回修复后的源码。 */
async function fix (options: LintspecOptions, filePath: string, code: string): Promise<string> {
  const eslint = new ESLint({
    fix: true,
    overrideConfigFile: true,
    overrideConfig: lintspec(options) as Linter.Config[],
  })
  const [result] = await eslint.lintText(code, { filePath })
  return result.output ?? code
}

describe('规则层运行时校验', () => {
  it('基线层捕获核心问题', async () => {
    const ids = await lint({}, 'sample.js', 'var x = 1\n')
    expect(ids).toContain('no-var')
  })

  it('TypeScript 层用扩展规则捕获未使用变量', async () => {
    const ids = await lint({ typescript: true }, 'sample.ts', 'const value: number = 1\n')
    expect(ids).toContain('@typescript-eslint/no-unused-vars')
  })

  it('import 层捕获重复导入', async () => {
    const ids = await lint(
      {},
      'sample.js',
      'import a from "./mod.js"\nimport b from "./mod.js"\nexport { a, b }\n',
    )
    expect(ids).toContain('import-x/no-duplicates')
  })

  it('perfectionist 层按行长排序导入', async () => {
    const ids = await lint(
      { perfectionist: true },
      'sample.js',
      'import longer from "longer-package"\nimport a from "a"\nexport { a, longer }\n',
    )
    expect(ids).toContain('perfectionist/sort-imports')
  })

  it('react 层捕获缺失的 Hook 依赖', async () => {
    const ids = await lint(
      { react: true, browser: true },
      'Sample.jsx',
      'import { useEffect } from "react"\nexport function Sample({ value }) {\n  useEffect(() => {\n    console.log(value)\n  }, [])\n  return null\n}\n',
    )
    expect(ids).toContain('react-hooks/exhaustive-deps')
  })

  it('vue 层加载并校验单文件组件', async () => {
    const ids = await lint(
      { vue: true },
      'sample.vue',
      '<template><div id="first" id="second"></div></template>\n',
    )
    expect(ids).toContain('vue/no-duplicate-attributes')
  })
})

describe('新增规则校验', () => {
  it('TypeScript 默认不强推类型导入、命名与 any 策略', async () => {
    const code = 'export class widget { value: any = 1 }\n'
    const ids = await lint({ typescript: true }, 'sample.ts', code)
    expect(ids).not.toContain('@typescript-eslint/consistent-type-imports')
    expect(ids).not.toContain('@typescript-eslint/naming-convention')
    expect(ids).not.toContain('@typescript-eslint/no-explicit-any')
  })

  it('默认不重写多余三元', async () => {
    const ids = await lint({}, 'sample.js', 'export const f = a => (a ? true : false)\n')
    expect(ids).not.toContain('no-unneeded-ternary')
  })

  it('默认保留数字分隔符与数字字面量大小写', async () => {
    const code = 'export const timeout = 30_000\nexport const mask = 0xffffffff\n'
    const ids = await lint({}, 'sample.js', code)
    expect(ids).not.toContain('unicorn/numeric-separators-style')
    expect(ids).not.toContain('unicorn/number-literal-case')
    expect(await fix({}, 'sample.js', code)).toBe(code)
    expect(await fix({ unicorn: { strict: true } }, 'sample.js', code)).toBe(code)
  })

  it('禁止用 void 丢弃 Promise', async () => {
    const ids = await lint({}, 'sample.js', 'void Promise.resolve()\n')
    expect(ids).toContain('no-void')
  })

  it('默认不执行 Unicorn 的控制流与 API 重写，strict 可显式启用', async () => {
    const code = [
      'const items = [1, 2, 3]',
      'items.forEach(item => console.log(item))',
      "document.body.appendChild(document.createElement('div'))",
      "export const value = 'aaa'.replace(/a/g, 'b')",
    ].join('\n')
    const guardedRules = [
      'unicorn/no-for-each',
      'unicorn/prefer-dom-node-append',
      'unicorn/prefer-string-replace-all',
    ]

    const defaults = await lint({ browser: true }, 'sample.js', code)
    const strict = await lint({ browser: true, unicorn: { strict: true } }, 'sample.js', code)
    for (const rule of guardedRules) {
      expect(defaults).not.toContain(rule)
      expect(strict).toContain(rule)
    }
  })

  it('完整 fix 保留浏览器 API、循环与字符串 API', async () => {
    const output = await fix(
      { browser: true },
      'sample.js',
      [
        'export const root = window;',
        'export const element = document.getElementById("app");',
        'export const items = [1, 2, 3];',
        'items.forEach(item => console.log(item));',
        'document.body.appendChild(element);',
        'export const value = "aaa".replace(/a/g, "b");',
      ].join('\n'),
    )

    expect(output).toContain('window')
    expect(output).toContain("getElementById('app')")
    expect(output).toContain('items.forEach(')
    expect(output).toContain('appendChild(element)')
    expect(output).toContain(".replace(/a/g, 'b')")
    expect(output).not.toContain('globalThis')
    expect(output).not.toContain('querySelector')
    expect(output).not.toContain('replaceAll')
  })

  it('import 强制省略后缀，可关闭', async () => {
    const code = 'import { a } from "./m.ts"\nexport const x = a\n'
    expect(await lint({ importX: true, typescript: true }, 'sample.ts', code)).toContain(
      'import-x/extensions',
    )
    expect(
      await lint({ importX: { extensions: false }, typescript: true }, 'sample.ts', code),
    ).not.toContain('import-x/extensions')
  })

  it('maxLines 限制文件行数，可关闭', async () => {
    const longFile = `${Array.from({ length: 12 }, (_, i) => `export const v${i} = ${i}`).join('\n')}\n`
    expect(await lint({ maxLines: 5 }, 'sample.js', longFile)).toContain('max-lines')
    expect(await lint({ maxLines: false }, 'sample.js', longFile)).not.toContain('max-lines')
  })

  it('TypeScript 默认不强推 require 迁移', async () => {
    const ids = await lint(
      { node: true, typescript: true },
      'sample.ts',
      'const a = require("node:fs")\nexport { a }\n',
    )
    expect(ids).not.toContain('@typescript-eslint/no-require-imports')
  })

  it('TS 层不将「值 + 类型同模块」判为重复导入', async () => {
    const code =
      'import { ref } from "vue"\nimport type { Ref } from "vue"\nexport const x: Ref<number> = ref(0)\n'
    const ids = await lint({ typescript: true }, 'sample.ts', code)
    expect(ids).not.toContain('no-duplicate-imports')
  })
})
