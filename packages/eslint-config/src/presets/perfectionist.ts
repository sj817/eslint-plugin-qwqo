import type { Linter } from 'eslint'
import perfectionist from 'eslint-plugin-perfectionist'

import { GLOB_JS_TS } from '../globs'

/** import 的排序方式：按行长（短→长）或自然顺序。 */
export type PerfectionistSort = 'line-length' | 'natural'

/**
 * 排序层：基于 eslint-plugin-perfectionist。对象、类型等按自然顺序排序；
 * import 单独配置——分组顺序为 Node 内置 → npm 包 → 内部源码 → 类型导入，组内按行长短→长。
 *
 * @param sort - import 的排序方式，默认按行长（短→长）
 * @param objects - 是否排序对象键（`perfectionist/sort-objects`）；关闭后仅保留 import 等排序
 */
export function perfectionistPreset (sort: PerfectionistSort, objects: boolean): Linter.Config[] {
  const configs: Linter.Config[] = [
    {
      ...(perfectionist.configs['recommended-natural'] as Linter.Config),
      name: 'qwqo/perfectionist',
      files: GLOB_JS_TS,
    },
    {
      name: 'qwqo/perfectionist/imports',
      files: GLOB_JS_TS,
      rules: {
        'perfectionist/sort-imports': [
          'error',
          {
            type: sort,
            order: 'asc',
            groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'type'],
          },
        ],
      },
    },
  ]

  // 对象键排序较易干扰手写顺序（如配置对象），可单独关闭而保留 import 排序。
  if (!objects) {
    configs.push({
      name: 'qwqo/perfectionist/no-objects',
      files: GLOB_JS_TS,
      rules: {
        'perfectionist/sort-objects': 'off',
      },
    })
  }

  return configs
}
