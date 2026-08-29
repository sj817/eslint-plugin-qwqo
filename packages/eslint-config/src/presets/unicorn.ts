import type { Linter } from 'eslint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

/**
 * 默认层只保留高置信度的错误、安全与规范违例检查。
 * 明确列出允许项，可确保 Unicorn 升级时新增规则不会自动进入默认配置。
 */
const safeRules: Linter.RulesRecord = {
  'unicorn/no-accessor-recursion': 'error',
  'unicorn/no-boolean-sort-comparator': 'error',
  'unicorn/no-duplicate-logical-operands': 'error',
  'unicorn/no-impossible-length-comparison': 'error',
  'unicorn/no-incorrect-query-selector': 'error',
  'unicorn/no-instanceof-builtins': 'error',
  'unicorn/no-invalid-argument-count': 'error',
  'unicorn/no-invalid-character-comparison': 'error',
  'unicorn/no-invalid-fetch-options': 'error',
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-invalid-well-known-symbol-methods': 'error',
  'unicorn/no-late-current-target-access': 'error',
  'unicorn/no-late-event-control': 'error',
  'unicorn/no-mismatched-map-key': 'error',
  'unicorn/no-misrefactored-assignment': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-optional-chaining-on-undeclared-variable': 'error',
  'unicorn/no-unsafe-buffer-conversion': 'error',
  'unicorn/no-unsafe-promise-all-settled-values': 'error',
  'unicorn/no-unsafe-property-key': 'error',
  'unicorn/no-unsafe-string-replacement': 'error',
  'unicorn/require-proxy-trap-boolean-return': 'error',
}

/**
 * Unicorn 安全增强层。默认仅启用明确白名单；`strict` 才启用完整推荐集。
 *
 * @param files - 该层适用的文件匹配模式
 * @param strict - 是否显式启用完整 Unicorn 推荐规则
 */
export function unicornPreset (files: string[], strict: boolean): Linter.Config[] {
  const recommended = eslintPluginUnicorn.configs.recommended as Linter.Config

  return [{
    ...recommended,
    name: strict ? 'qwqo/unicorn/strict' : 'qwqo/unicorn',
    files,
    rules: strict ? recommended.rules : safeRules,
  }]
}
