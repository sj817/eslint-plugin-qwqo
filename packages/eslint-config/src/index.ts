import type { Linter } from 'eslint'
import { neostandard, plugins as neostandardPlugins } from 'neostandard'

import { GLOB_JS, GLOB_JS_TS, GLOB_TS, GLOB_VUE } from './globs'
import { commonIgnores } from './ignores'
import { importPreset } from './presets/import'
import { type PerfectionistSort, perfectionistPreset } from './presets/perfectionist'
import { reactPreset } from './presets/react'
import { unicornPreset } from './presets/unicorn'
import { vuePreset } from './presets/vue'

export interface TypeScriptOptions {
  /** Enable checks that need TypeScript project information. @default false */
  typeAware?: boolean
}

export interface UnicornOptions {
  /** Enable the full upstream recommended ruleset. @default false */
  strict?: boolean
}

export interface ImportXOptions {
  /** Require extensionless relative imports. @default true */
  extensions?: boolean
  /** tsconfig path or glob used by the TypeScript import resolver. */
  project?: string | string[]
  noWarnOnMultipleProjects?: boolean
}

export interface PerfectionistOptions {
  sort?: PerfectionistSort
  objects?: boolean
}

export interface QwqoOptions {
  node?: boolean
  browser?: boolean
  unicorn?: boolean | UnicornOptions
  typescript?: boolean | TypeScriptOptions
  importX?: boolean | ImportXOptions
  perfectionist?: boolean | PerfectionistOptions
  react?: boolean
  vue?: boolean
  maxLines?: number | false
  files?: string[]
  ignores?: string[]
  overrides?: Linter.RulesRecord
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

/** Neostandard supplies the base rules; this factory adds only qwqo policy. */
export default function qwqo (options: QwqoOptions = {}): Linter.Config[] {
  const {
    node = false,
    browser = false,
    unicorn = true,
    typescript = false,
    importX = true,
    perfectionist = false,
    react = false,
    vue = false,
    maxLines = 500,
    files = GLOB_JS,
    ignores = [],
    overrides = {},
  } = options

  const typescriptEnabled = typescript !== false
  const typeAware = typeof typescript === 'object' && typescript.typeAware === true
  const lintFiles = typescriptEnabled ? GLOB_JS_TS : files
  const baseFiles = typescriptEnabled ? [...files, ...GLOB_TS] : files
  const env: Array<'node' | 'browser'> = []
  if (node) env.push('node')
  if (browser) env.push('browser')

  const config: Linter.Config[] = [
    { name: 'qwqo/ignores', ignores: [...commonIgnores, ...ignores] },
    ...neostandard({ ts: typescriptEnabled, files, env }),
    {
      name: 'qwqo/policy',
      files: baseFiles,
      linterOptions: {
        reportUnusedDisableDirectives: 'error',
        reportUnusedInlineConfigs: 'error',
      },
      rules: {
        'no-unneeded-ternary': 'off',
        ...(maxLines === false
          ? {}
          : { 'max-lines': ['warn', { max: maxLines, skipBlankLines: true, skipComments: true }] }),
      },
    },
  ]

  if (typeAware) {
    config.push({
      name: 'qwqo/typescript/type-aware',
      files: GLOB_TS,
      languageOptions: { parserOptions: { projectService: true } },
      rules: {
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: false }],
      },
    })
  }

  if (importX !== false) {
    const settings = typeof importX === 'object' ? importX : {}
    config.push(...importPreset(
      typescriptEnabled,
      settings.extensions !== false,
      settings.project,
      settings.noWarnOnMultipleProjects,
    ))
  }

  if (perfectionist !== false) {
    const settings = typeof perfectionist === 'object' ? perfectionist : {}
    config.push(...perfectionistPreset(
      settings.sort === 'natural' ? 'natural' : 'line-length',
      settings.objects === true,
    ))
  }

  if (react) config.push(...reactPreset())
  if (vue) config.push(...vuePreset(typescriptEnabled))
  if (unicorn !== false) {
    config.push(...unicornPreset(lintFiles, typeof unicorn === 'object' && unicorn.strict === true))
  }

  config.push({
    name: 'qwqo/style',
    files: lintFiles,
    plugins: { '@stylistic': neostandardPlugins['@stylistic'] },
    rules: { '@stylistic/comma-dangle': ['error', commaDangle] },
  })
  if (vue) {
    config.push({
      name: 'qwqo/style/vue',
      files: GLOB_VUE,
      plugins: { '@stylistic': neostandardPlugins['@stylistic'] },
      rules: { '@stylistic/comma-dangle': ['error', commaDangle] },
    })
  }

  if (Object.keys(overrides).length > 0) {
    config.push({ name: 'qwqo/overrides', files: baseFiles, rules: overrides })
  }
  return config
}

export type { Linter } from 'eslint'
