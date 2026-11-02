# Unicorn 层

Unicorn 默认只启用固定的 **22 条高置信度纠错规则**。这是显式白名单，不继承插件的完整推荐集，因此插件以后增加新规则，也不会悄悄进入本包默认配置。

默认规则只检查能够明确证明有问题的代码，例如：

- 无效的 `fetch` 选项与事件监听器移除；
- 错误的 `querySelector`、字符串替换和 `Buffer` 转换；
- 不可能成立的长度比较、重复逻辑操作数和无效参数数量；
- `Proxy` trap 返回值、well-known symbol 方法和 Promise settled values 的明显错误。

以下类型的规则全部默认关闭：

- 控制流、循环和条件重写；
- async/Promise 写法迁移；
- 类、数据结构和命名改造；
- Node、DOM 与 JavaScript API 替换；
- 面向特定运行时或兼容性目标的现代化建议。

`numeric-separators-style` 与 `number-literal-case` 会干扰数字字面量阅读，因此不仅默认关闭，在 `strict` 模式下也保持关闭。`30_000`、`50_000`、时间戳分隔符和 `0xffffffff` 都会保留作者写法。

因此默认的完整 `eslint --fix` 不会执行 `forEach` → `for...of`、`appendChild` → `append`、`window` → `globalThis`、`getElementById` → `querySelector`、`replace` → `replaceAll` 等迁移。

## 默认规则

```text
no-accessor-recursion
no-boolean-sort-comparator
no-duplicate-logical-operands
no-impossible-length-comparison
no-incorrect-query-selector
no-instanceof-builtins
no-invalid-argument-count
no-invalid-character-comparison
no-invalid-fetch-options
no-invalid-remove-event-listener
no-invalid-well-known-symbol-methods
no-late-current-target-access
no-late-event-control
no-mismatched-map-key
no-misrefactored-assignment
no-new-buffer
no-optional-chaining-on-undeclared-variable
no-unsafe-buffer-conversion
no-unsafe-promise-all-settled-values
no-unsafe-property-key
no-unsafe-string-replacement
require-proxy-trap-boolean-return
```

## 严格模式

只有主动选择扩展 Unicorn 推荐集时才开启严格模式：

```js
export default qwqo({ unicorn: { strict: true } })
```

::: warning
`strict` 会带回控制流、API、异步、类与数据结构迁移规则。它适合愿意逐条审查迁移结果的新项目，不属于默认安全边界；两条数字字面量格式规则仍全局关闭。
:::

完整生效规则见 [全部规则](../reference/rules)。
