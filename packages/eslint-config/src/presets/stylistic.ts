import stylistic from '@stylistic/eslint-plugin'
import type { ESLint, Linter } from 'eslint'

import { GLOB_JSX, GLOB_JSX_TSX, GLOB_TS, GLOB_VUE } from '../globs'

const plugins = {
  '@stylistic': stylistic as unknown as ESLint.Plugin,
}

const commaDangle = {
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
} as const

/** Neostandard 0.14 风格基线；尾随逗号按项目约定增强为所有多行语法必需。 */
const neostandardStyleRules: Linter.RulesRecord = {
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  '@stylistic/comma-dangle': ['error', commaDangle],
  '@stylistic/comma-spacing': ['error', { before: false, after: true }],
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': 'error',
  '@stylistic/function-call-spacing': ['error', 'never'],
  '@stylistic/generator-star-spacing': ['error', { before: true, after: true }],
  '@stylistic/indent': ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: { parameters: 1, body: 1 },
    FunctionExpression: { parameters: 1, body: 1 },
    CallExpression: { arguments: 1 },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoreComments: false,
    assignmentOperator: 'off',
    ignoredNodes: [
      'TemplateLiteral *',
      'TSTypeParameterInstantiation',
    ],
    offsetTernaryExpressions: {
      CallExpression: false,
      AwaitExpression: false,
      NewExpression: false,
    },
  }],
  '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
  '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
  '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  '@stylistic/multiline-ternary': ['error', 'always-multiline'],
  '@stylistic/new-parens': 'error',
  '@stylistic/no-extra-parens': ['error', 'functions'],
  '@stylistic/no-floating-decimal': 'error',
  '@stylistic/no-mixed-operators': ['error', {
    groups: [
      ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
      ['&&', '||'],
      ['in', 'instanceof'],
    ],
    allowSamePrecedence: true,
  }],
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  '@stylistic/no-tabs': 'error',
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  '@stylistic/operator-linebreak': [
    'error',
    'after',
    { overrides: { '?': 'before', ':': 'before', '|>': 'before' } },
  ],
  '@stylistic/padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
  '@stylistic/quote-props': ['error', 'as-needed'],
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'never' }],
  '@stylistic/rest-spread-spacing': ['error', 'never'],
  '@stylistic/semi': ['error', 'never'],
  '@stylistic/semi-spacing': ['error', { before: false, after: true }],
  '@stylistic/space-before-blocks': ['error', 'always'],
  '@stylistic/space-before-function-paren': ['error', 'always'],
  '@stylistic/space-in-parens': ['error', 'never'],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
  '@stylistic/spaced-comment': ['error', 'always', {
    line: { markers: ['*package', '!', '/', ',', '='] },
    block: {
      balanced: true,
      markers: ['*package', '!', ',', ':', '::', 'flow-include'],
      exceptions: ['*'],
    },
  }],
  '@stylistic/template-curly-spacing': ['error', 'never'],
  '@stylistic/template-tag-spacing': ['error', 'never'],
  '@stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
  '@stylistic/yield-star-spacing': ['error', 'both'],
}

const neostandardJsxStyleRules: Linter.RulesRecord = {
  '@stylistic/jsx-quotes': ['error', 'prefer-single'],
  '@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
  '@stylistic/jsx-closing-tag-location': 'error',
  '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  '@stylistic/jsx-curly-newline': ['error', {
    multiline: 'consistent',
    singleline: 'consistent',
  }],
  '@stylistic/jsx-curly-spacing': ['error', {
    attributes: { when: 'never', allowMultiline: true },
    children: { when: 'never', allowMultiline: true },
  }],
  '@stylistic/jsx-equals-spacing': ['error', 'never'],
  '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  '@stylistic/jsx-indent-props': ['error', 2],
  '@stylistic/jsx-pascal-case': ['error', { allowAllCaps: false }],
  '@stylistic/jsx-tag-spacing': ['error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],
  '@stylistic/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'ignore',
    condition: 'ignore',
    logical: 'ignore',
    prop: 'ignore',
  }],
}

/** Neostandard 风格层，按已启用文件类型覆盖 JS、TS、JSX、TSX 与 Vue。 */
export function stylisticPreset (
  files: string[],
  typescript: boolean,
  vue: boolean,
): Linter.Config[] {
  const configs: Linter.Config[] = [{
    name: 'qwqo/stylistic',
    files,
    plugins,
    rules: neostandardStyleRules,
  }]

  if (typescript) {
    configs.push({
      name: 'qwqo/stylistic/typescript',
      files: GLOB_TS,
      plugins,
      rules: {
        '@stylistic/operator-linebreak': [
          'error',
          'after',
          {
            overrides: {
              '?': 'before',
              ':': 'before',
              '|>': 'before',
              '|': 'ignore',
              '&': 'ignore',
            },
          },
        ],
      },
    })
  }

  configs.push({
    name: 'qwqo/stylistic/jsx',
    files: typescript ? GLOB_JSX_TSX : GLOB_JSX,
    plugins,
    rules: neostandardJsxStyleRules,
  })

  if (vue) {
    configs.push({
      name: 'qwqo/stylistic/vue',
      files: GLOB_VUE,
      plugins,
      rules: neostandardStyleRules,
    })
  }

  return configs
}
