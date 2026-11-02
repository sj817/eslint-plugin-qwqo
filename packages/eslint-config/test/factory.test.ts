import { describe, expect, it } from 'vitest'

import qwqo from '../src/index'

/** 取出配置数组中所有具名的层名称。 */
function names (config: ReturnType<typeof qwqo>): string[] {
  return config.map(item => item.name).filter((name): name is string => typeof name === 'string')
}

describe('qwqo 工厂', () => {
  it('默认包含基线、import、unicorn 与 Stylistic 格式层', () => {
    const layers = names(qwqo())
    expect(layers).toContain('neostandard/base')
    expect(layers).toContain('qwqo/import')
    expect(layers).toContain('qwqo/unicorn')
    expect(layers).toContain('qwqo/style')
  })

  it('Stylistic 格式层位于功能规则之后', () => {
    const config = qwqo({ typescript: true, importX: true, react: true })
    const stylisticIndex = config.findIndex(item => item.name === 'qwqo/style')
    const unicornIndex = config.findIndex(item => item.name === 'qwqo/unicorn')
    expect(stylisticIndex).toBeGreaterThan(unicornIndex)
    expect(config.at(-1)?.name?.startsWith('qwqo/style')).toBe(true)
  })

  it('只在启用 Vue 时追加 Vue 格式层', () => {
    expect(names(qwqo())).not.toContain('qwqo/style/vue')
    expect(names(qwqo({ vue: true }))).toContain('qwqo/style/vue')
  })

  it('unicorn 可关闭', () => {
    expect(names(qwqo({ unicorn: false }))).not.toContain('qwqo/unicorn')
  })

  it('importX 默认开启且可关闭', () => {
    expect(names(qwqo())).toContain('qwqo/import')
    expect(names(qwqo({ importX: false }))).not.toContain('qwqo/import')
  })

  it('默认 import 层不擅自接管未启用的 TypeScript 文件', () => {
    const javascript = qwqo().find(item => item.name === 'qwqo/import')
    const typescript = qwqo({ typescript: true }).find(item => item.name === 'qwqo/import')
    expect(javascript?.files).toEqual(['**/*.{js,mjs,cjs,jsx}'])
    expect(typescript?.files).toEqual(['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'])
  })

  it('typescript 开关控制 TypeScript 层', () => {
    expect(names(qwqo())).not.toContain('neostandard/ts')
    expect(names(qwqo({ typescript: true }))).toContain('neostandard/ts')
  })

  it('typeAware 追加类型感知层', () => {
    expect(names(qwqo({ typescript: { typeAware: true } }))).toContain(
      'qwqo/typescript/type-aware',
    )
    expect(names(qwqo({ typescript: true }))).not.toContain('qwqo/typescript/type-aware')
  })

  it('各规则层均可独立开启', () => {
    expect(names(qwqo({ importX: true }))).toContain('qwqo/import')
    expect(names(qwqo({ perfectionist: true }))).toContain('qwqo/perfectionist')
    expect(names(qwqo({ react: true }))).toContain('qwqo/react')
    expect(names(qwqo({ vue: true })).some(name => name.startsWith('vue/'))).toBe(true)
  })

  it('unicorn.strict 启用被默认关闭的激进规则', () => {
    const defaults = qwqo().find(item => item.name === 'qwqo/unicorn')
    const disabledByDefault = [
      'unicorn/catch-error-name',
      'unicorn/no-for-each',
      'unicorn/prefer-dom-node-append',
      'unicorn/prefer-global-this',
      'unicorn/prefer-node-protocol',
      'unicorn/prefer-private-class-fields',
      'unicorn/prefer-query-selector',
      'unicorn/prefer-string-replace-all',
      'unicorn/require-passive-events',
    ]
    for (const rule of disabledByDefault) {
      expect(defaults?.rules?.[rule]).toBeUndefined()
    }
    expect(defaults?.rules?.['unicorn/no-invalid-fetch-options']).toBe('error')
    expect(
      Object.values(defaults?.rules ?? {}).filter(value => value !== 'off' && value !== 0),
    ).toHaveLength(22)

    const strict = qwqo({ unicorn: { strict: true } }).find(
      item => item.name === 'qwqo/unicorn/strict',
    )
    for (const rule of disabledByDefault) {
      expect(strict?.rules?.[rule]).toBeDefined()
    }

    for (const rule of [
      'unicorn/number-literal-case',
      'unicorn/numeric-separators-style',
    ]) {
      expect(defaults?.rules?.[rule]).toBe('off')
      expect(strict?.rules?.[rule]).toBe('off')
    }
  })

  it('React 默认不启用 React 19 迁移与命名规则', () => {
    const react = qwqo({ react: true }).find(item => item.name === 'qwqo/react')
    expect(react?.rules?.['@eslint-react/no-context-provider']).toBeUndefined()
    expect(react?.rules?.['@eslint-react/no-use-context']).toBeUndefined()
    expect(react?.rules?.['@eslint-react/naming-convention-ref-name']).toBeUndefined()
    expect(react?.rules?.['@eslint-react/no-missing-key']).toBe('error')
  })

  it('importX.extensions 控制无后缀强制层', () => {
    expect(names(qwqo({ importX: true }))).toContain('qwqo/import/extensions')
    expect(names(qwqo({ importX: { extensions: false } }))).not.toContain(
      'qwqo/import/extensions',
    )
  })

  it('TypeScript import 层配置官方 resolver，并允许指定 monorepo tsconfig', () => {
    const config = qwqo({
      typescript: true,
      importX: {
        project: ['packages/*/tsconfig.json'],
        noWarnOnMultipleProjects: true,
      },
    })
    const resolver = config.find(item => item.name === 'qwqo/import/typescript-resolver')
    expect(resolver?.settings?.['import-x/resolver-next']).toHaveLength(1)
  })

  it('perfectionist 始终配置 import 分组排序', () => {
    expect(names(qwqo({ perfectionist: true }))).toContain('qwqo/perfectionist/imports')
    expect(names(qwqo({ perfectionist: { sort: 'natural' } }))).toContain('qwqo/perfectionist')
  })

  it('perfectionist 默认关闭对象键排序，objects:true 可开启', () => {
    const def = qwqo({ perfectionist: true }).find(
      item => item.name === 'qwqo/perfectionist/no-objects',
    )
    expect(def?.rules?.['perfectionist/sort-objects']).toBe('off')
    expect(names(qwqo({ perfectionist: { objects: true } }))).not.toContain(
      'qwqo/perfectionist/no-objects',
    )
  })

  it('overrides 非空时追加最高优先级层', () => {
    const config = qwqo({ overrides: { 'no-console': 'error' } })
    const overrides = config.find(item => item.name === 'qwqo/overrides')
    expect(overrides?.rules?.['no-console']).toBe('error')
  })

  it('ignores 追加到内置忽略项之后', () => {
    const config = qwqo({ ignores: ['vendor/**'] })
    const ignores = config.find(item => item.name === 'qwqo/ignores')
    expect(ignores?.ignores).toContain('vendor/**')
    expect(ignores?.ignores).toContain('**/node_modules/**')
    expect(ignores?.ignores).toContain('**/target/**')
  })

  it('maxLines 默认在基线层注入 max-lines（500）', () => {
    const base = qwqo().find(item => item.name === 'qwqo/policy')
    expect(base?.rules?.['max-lines']).toEqual([
      'warn',
      { max: 500, skipBlankLines: true, skipComments: true },
    ])
  })

  it('maxLines 可自定义上限，传 false 关闭', () => {
    const custom = qwqo({ maxLines: 500 }).find(item => item.name === 'qwqo/policy')
    expect(custom?.rules?.['max-lines']).toEqual([
      'warn',
      { max: 500, skipBlankLines: true, skipComments: true },
    ])
    const off = qwqo({ maxLines: false }).find(item => item.name === 'qwqo/policy')
    expect(off?.rules?.['max-lines']).toBeUndefined()
  })

  it('typeAware 不允许用 void 绕过浮动 Promise', () => {
    const layer = qwqo({ typescript: { typeAware: true } }).find(
      item => item.name === 'qwqo/typescript/type-aware',
    )
    expect(layer?.rules?.['@typescript-eslint/no-floating-promises']).toEqual([
      'error',
      { ignoreVoid: false },
    ])
  })

  it('所有多行语法均要求尾随逗号', () => {
    const layer = qwqo().find(item => item.name === 'qwqo/style')
    expect(layer?.rules?.['@stylistic/comma-dangle']).toEqual([
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        importAttributes: 'always-multiline',
        dynamicImports: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ])
  })
})
