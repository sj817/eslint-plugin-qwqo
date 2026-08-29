# Stylistic 格式层

Stylistic 层基于 `@stylistic/eslint-plugin`，并从 [Neostandard 0.14 的当前规则](https://github.com/neostandard/neostandard/tree/59bfaa10732febe399585fa47abf2d2ed2eef17a) 移植。它始终在功能规则层之后启用，负责 JS、TS、JSX、TSX 与 Vue 文件的格式检查和自动修复。

## 为什么始终启用

格式本身就是规范的一部分。所有项目得到同一套缩进、空格、引号、换行和逗号约定，`overrides` 仍可在最后精确调整单条规则。

```js
export default lintspec({
  overrides: {
    '@stylistic/space-before-function-paren': 'off',
  },
})
```

## 换行与尾随逗号

这一层采用 Neostandard 的自然换行规则：作者选择多行布局后，ESLint 保持多行并统一缩进。Lintspec 在上游基础上做了一项明确扩展：所有允许尾随逗号的多行语法都要求尾随逗号。

::: before

```ts
function collect(
  first: string,
  second: string
) {
  return [
    first,
    second
  ]
}
```

:::

::: after

```ts
function collect (
  first: string,
  second: string,
) {
  return [
    first,
    second,
  ]
}
```

:::

完整命令和能力边界见 [格式化](../guide/formatting)。
