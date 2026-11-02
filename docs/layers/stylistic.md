# Stylistic 格式层

Stylistic 层直接使用 [Neostandard](https://github.com/neostandard/neostandard) 的上游规则。本包只在功能规则层之后叠加多行结构的尾随逗号要求，并为 Vue 文件应用这条规则。

## 为什么始终启用

格式本身就是规范的一部分。所有项目得到同一套缩进、空格、引号、换行和逗号约定，`overrides` 仍可在最后精确调整单条规则。

```js
export default qwqo({
  overrides: {
    '@stylistic/space-before-function-paren': 'off',
  },
})
```

## 换行与尾随逗号

这一层采用 Neostandard 的自然换行规则：作者选择多行布局后，ESLint 保持多行并统一缩进。本包在上游基础上要求所有允许尾随逗号的多行语法都写出尾随逗号。

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
