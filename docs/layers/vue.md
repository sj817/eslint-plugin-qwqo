# Vue 层

Vue 层使用 `eslint-plugin-vue` 的 **essential** 基线，只开启用于避免错误或未定义行为的规则，不继承带有项目风格和架构偏好的完整推荐集。

默认会检查模板解析错误、重复属性、不合法指令、缺失关键绑定等明确问题；不会强制组件命名、属性顺序、模板排版或业务结构偏好。

```js
export default qwqo({
  browser: true,
  vue: true,
  typescript: true,
})
```

启用 TypeScript 时，Vue script 由同一 TypeScript parser 处理。完整生效规则见 [全部规则](../reference/rules)。
