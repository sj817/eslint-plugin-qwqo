---
layout: home

hero:
  name: Lintspec
  text: 一个函数搞定 ESLint
  tagline: 代码质量与格式化统一收口，TypeScript / React / Vue 开箱即用。
  image:
    src: /logo.svg
    alt: Lintspec logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 格式规范
      link: /guide/formatting
    - theme: alt
      text: GitHub
      link: https://github.com/sj817/lintspec

features:
  - icon: { src: /icons/zap.svg, width: 26, height: 26 }
    title: 代码一次修复
    details: eslint --fix 同时处理代码问题与代码格式，不再让第二个工具重新打印 JS/TS。
  - icon: { src: /icons/layers.svg, width: 26, height: 26 }
    title: 分层可选
    details: 基线、TypeScript、import-x、perfectionist、React、Vue、unicorn 各自独立，按需开启。
  - icon: { src: /icons/sparkles.svg, width: 26, height: 26 }
    title: Neostandard 风格
    details: 无分号、单引号、自然换行，并为所有多行结构保留尾随逗号。
  - icon: { src: /icons/check.svg, width: 26, height: 26 }
    title: 可自动修复
    details: 缩进、空格、引号、逗号与换行约定均由 ESLint 检查并尽可能自动修复。
  - icon: { src: /icons/list.svg, width: 26, height: 26 }
    title: 完整规则索引
    details: 自动生成全部启用规则、级别、修复能力与配置入口。
  - icon: { src: /icons/code.svg, width: 26, height: 26 }
    title: TypeScript 源码
    details: 全量 TypeScript 编写，tsdown 构建，提供完整类型声明与编辑器补全。
---

<div class="ls-stats">
  <div class="ls-stat"><div class="num">1</div><div class="label">个统一入口</div></div>
  <div class="ls-stat"><div class="num">8</div><div class="label">个规则层</div></div>
  <div class="ls-stat"><div class="num">500</div><div class="label">默认最大行数</div></div>
  <div class="ls-stat"><div class="num">TS</div><div class="label">源码 + 类型</div></div>
</div>

## 快速预览

```js
// eslint.config.js
import lintspec from '@qwqo/eslint-config'

export default lintspec({
  node: true,
  typescript: true,
  importX: true,
  perfectionist: true,
})
```

```bash
eslint . --fix
```

每个开关都支持「布尔」或「子选项对象」两种写法，外加 `overrides` 万能覆盖 —— 详见 [配置项总览](./guide/options)。
