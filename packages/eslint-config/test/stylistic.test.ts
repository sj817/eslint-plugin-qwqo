import { ESLint, type Linter } from 'eslint'
import { describe, expect, it } from 'vitest'

import qwqo from '../src/index'

async function format (code: string, filePath = 'sample.js'): Promise<string> {
  const eslint = new ESLint({
    fix: true,
    overrideConfigFile: true,
    overrideConfig: qwqo({ typescript: filePath.endsWith('.ts') }) as Linter.Config[],
  })
  const [result] = await eslint.lintText(code, { filePath })
  return result.output ?? code
}

describe('Stylistic 格式层', () => {
  it('使用无分号、单引号与 Neostandard 函数空格', async () => {
    const output = await format('export function greet(name) { return "hello " + name; }\n')
    expect(output).toBe("export function greet (name) { return 'hello ' + name }\n")
  })

  it('为所有多行结构保留尾随逗号', async () => {
    const output = await format(`export function collect(
  first,
  second
) {
  return [
    first,
    second
  ]
}
`)
    expect(output).toBe(`export function collect (
  first,
  second,
) {
  return [
    first,
    second,
  ]
}
`)
  })

  it('保留作者主动写出的多行调用', async () => {
    const code = `export const value = call(
  first,
  second,
)
`
    expect(await format(code)).toBe(code)
  })

  it('不会因为首行有多个参数而把多行调用挤回一行', async () => {
    const code = `export const value = call(
  first, second,
  options,
  callback,
)
`
    expect(await format(code)).toBe(code)
  })
})
