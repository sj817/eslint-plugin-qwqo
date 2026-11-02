# React 层

React 层默认只启用明确的正确性检查，以及 React 官方 Hooks 规则。它不会自动迁移 React API、重命名引用或为编译器重写组件结构。

默认检查包括：

- state 直接修改与缺失 `key`；
- `children`、spread 后的 `key` 和 JSX namespace 错误；
- void element、iframe sandbox、危险 HTML 与 script URL 的明显 DOM 问题；
- `react-hooks/rules-of-hooks` 与 `react-hooks/exhaustive-deps`。

```js
export default qwqo({
  browser: true,
  react: true,
})
```

React 19 迁移、Context/useRef 命名、组件结构偏好和编译器建议类规则均默认关闭。完整生效规则见 [全部规则](../reference/rules)。
