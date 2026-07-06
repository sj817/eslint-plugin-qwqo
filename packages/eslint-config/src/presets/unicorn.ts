import type { Linter } from 'eslint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

/** unicorn 推荐集中过于激进、默认关闭的规则。开启 `strict` 后这些规则会被启用。 */
const unicornOverrides: Linter.RulesRecord = {
  'unicorn/filename-case': 'off',
  'unicorn/name-replacements': 'off', // v68 起由 prevent-abbreviations 更名而来
  'unicorn/no-null': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-nested-ternary': 'off',
  'unicorn/prefer-top-level-await': 'off',
  // 纯风格偏好，过于武断：强制去掉 `new URL('./x')` 的 `./` 前缀、强制数字分隔符 `10_000`。
  'unicorn/relative-url-style': 'off',
  'unicorn/numeric-separators-style': 'off',
  // v66+ 新增且高频武断：强制布尔名带 is/has 前缀(会波及配置项/参数命名)、
  // 强制 `...(cond ? x : {})` 改写为 `...(cond && x)`。
  'unicorn/consistent-boolean-name': 'off',
  'unicorn/consistent-conditional-object-spread': 'off',
}

/**
 * unicorn 现代化增强层：基于 unicorn 推荐配置（覆盖其绝大多数规则）。
 *
 * @param files - 该层适用的文件匹配模式
 * @param strict - 是否启用默认关闭的 10 条激进规则
 */
export function unicornPreset(files: string[], strict: boolean): Linter.Config[] {
  const recommended = eslintPluginUnicorn.configs.recommended as Linter.Config

  const configs: Linter.Config[] = [
    {
      ...recommended,
      name: 'qwqo/unicorn',
      files,
    },
  ]

  if (!strict) {
    configs.push({
      name: 'qwqo/unicorn/overrides',
      files,
      rules: unicornOverrides,
    })
  }

  return configs
}
