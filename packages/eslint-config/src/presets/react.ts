import type { ESLint, Linter } from 'eslint'
import eslintReact from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'

import { GLOB_JSX_TSX } from '../globs'

/** React 层只保留明确的运行时错误、Hooks 正确性与危险 DOM 用法检查。 */
export function reactPreset (): Linter.Config[] {
  const recommended = eslintReact.configs.recommended as unknown as Linter.Config

  return [
    {
      name: 'qwqo/react',
      files: GLOB_JSX_TSX,
      plugins: recommended.plugins,
      settings: recommended.settings,
      rules: {
        '@eslint-react/no-direct-mutation-state': 'error',
        '@eslint-react/no-missing-key': 'error',
        '@eslint-react/jsx-no-children-prop-with-children': 'error',
        '@eslint-react/jsx-no-key-after-spread': 'error',
        '@eslint-react/jsx-no-namespace': 'error',
        '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',
        '@eslint-react/dom-no-render-return-value': 'error',
        '@eslint-react/dom-no-script-url': 'warn',
        '@eslint-react/dom-no-unsafe-iframe-sandbox': 'warn',
        '@eslint-react/dom-no-void-elements-with-children': 'error',
      },
    },
    {
      name: 'qwqo/react/hooks',
      files: GLOB_JSX_TSX,
      plugins: {
        'react-hooks': reactHooks as unknown as ESLint.Plugin,
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ]
}
