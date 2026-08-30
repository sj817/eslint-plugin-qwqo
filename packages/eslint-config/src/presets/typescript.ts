import type { ESLint, Linter } from 'eslint'
import { parser, plugin } from 'typescript-eslint'

import { GLOB_TS } from '../globs'
import { baseRules } from '../rules/base'

/** TypeScript 编译器已经覆盖、无需由 ESLint 重复检查的核心规则。 */
const compilerCheckedRules: Linter.RulesRecord = {
  'getter-return': 'off',
  'constructor-super': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
  'no-new-native-nonconstructor': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
}

/** 将 Neostandard 核心规则映射为 typescript-eslint 的同名扩展规则。 */
function typescriptRules (typeAware: boolean): Linter.RulesRecord {
  const deactivatedRules: Linter.RulesRecord = { ...compilerCheckedRules }
  const replacements: Linter.RulesRecord = {}
  const rules = (plugin as unknown as ESLint.Plugin).rules ?? {}

  for (const [ruleId, rule] of Object.entries(rules)) {
    const current = baseRules[ruleId]
    if (current === undefined) continue

    const docs = rule.meta?.docs
    if (!docs || typeof docs !== 'object' || !('extendsBaseRule' in docs) || !docs.extendsBaseRule) {
      continue
    }
    if ('requiresTypeChecking' in docs && docs.requiresTypeChecking && !typeAware) continue

    deactivatedRules[ruleId] = 'off'
    if (ruleId !== 'dot-notation') replacements[`@typescript-eslint/${ruleId}`] = current
  }

  return { ...deactivatedRules, ...replacements }
}

/**
 * Neostandard 式 TypeScript 适配层：只替换核心规则与解析器，不额外强推类型导入、命名或 any 策略。
 *
 * @param typeAware - 是否启用最小化的类型感知 Promise 检查
 */
export function typescriptPreset (typeAware: boolean): Linter.Config[] {
  const configs: Linter.Config[] = [{
    name: 'qwqo/typescript/overrides',
    files: GLOB_TS,
    languageOptions: {
      parser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
    },
    rules: {
      ...typescriptRules(typeAware),
    },
  }]

  if (typeAware) {
    configs.push({
      name: 'qwqo/typescript/type-aware',
      files: GLOB_TS,
      languageOptions: {
        parserOptions: {
          projectService: true,
        },
      },
      rules: {
        '@typescript-eslint/no-floating-promises': [
          'error',
          { ignoreVoid: false },
        ],
      },
    })
  }

  return configs
}
