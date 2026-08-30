# Lintspec

[![CI](https://github.com/sj817/lintspec/actions/workflows/ci.yml/badge.svg)](https://github.com/sj817/lintspec/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@qwqo/eslint-config?label=eslint-config)](https://www.npmjs.com/package/@qwqo/eslint-config)

自用的 ESLint 共享规范：工厂式、分层、TypeScript 优先，并由 ESLint 统一负责代码质量与格式化。

📖 **文档：<https://eslint.qwqo.cn/>**

## 包

- `@qwqo/eslint-config` —— ESLint 代码质量与格式化规则
- `create-qwqo-config` —— 交互式脚手架

## 快速开始

最快的方式是用脚手架，按提示选框架 / TS / 环境，自动写配置、装依赖、加脚本：

```bash
pnpm create qwqo-config
```

或手动安装：

```bash
pnpm add -D eslint @qwqo/eslint-config
```

新建 `eslint.config.mjs`：

```js
import lintspec from '@qwqo/eslint-config'

export default lintspec({ node: true, typescript: true })
```

每个功能层都是可选开关，格式层始终启用：

```js
import lintspec from '@qwqo/eslint-config'

export default lintspec({
  node: true,
  browser: false,
  unicorn: true, // 默认仅启用 22 条安全纠错规则；strict 才启用扩展规则集
  typescript: true, // 或 { typeAware: true }
  importX: true, // 默认开启；false 关闭，或传 { extensions: false }
  perfectionist: true, // 或 { sort: 'natural', objects: true }
  react: true,
  vue: true,
  maxLines: 500, // 单文件最大行数；传 false 关闭
  ignores: ['vendor/**'],
  overrides: { 'no-await-in-loop': 'off' },
})
```

## 格式化

```bash
eslint .          # 检查代码质量与代码格式
eslint . --fix    # 应用格式修复与默认启用的安全纠错
pnpm format       # 先处理代码，再格式化仓库里的非代码文件
```

格式风格移植自 Neostandard 0.14：2 空格缩进、单引号、无分号、函数名与括号之间留空格，并保留作者主动写出的合理多行布局。Lintspec 额外要求所有多行数组、对象、导入导出、函数参数和 TypeScript 结构使用尾随逗号。

仓库自身的 Markdown、JSON、YAML 和 CSS 使用独立的非代码格式步骤。它通过明确的文件 glob 和 `.prettierignore` 与代码隔离，并关闭 Markdown 内嵌代码格式化，因此不会重新排版 JS/TS/Vue 或文档代码块。该工具不属于发布出去的共享配置，也不会由脚手架安装。

默认禁止 `void promise()`；开启 `typescript: { typeAware: true }` 后，未处理的 Promise 也会由类型感知规则检查，且 `void` 不能绕过检查。

## 开发

```bash
pnpm format      # 完整 eslint --fix，然后处理非代码文件
pnpm check       # 构建 + 类型检查 + 全部格式检查 + 测试
pnpm docs:dev    # 本地预览文档站
```

发版：把各包 `version` 改成同一新版本，提交后打 `v*` 标签推送，CI 经可信发布（OIDC，免 token）发布到 npm。
