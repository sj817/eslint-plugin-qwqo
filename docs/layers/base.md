# 基线层

基线直接来自 [Neostandard](https://github.com/neostandard/neostandard)，包含 ESLint 内置规则以及它启用的 Node.js、Promise 规则，覆盖代码安全与潜在错误，**随任意配置默认启用**。

> 标记说明：🔧 可通过 `eslint --fix` 自动修复 · 💡 在编辑器中提供修复建议。

## 严格相等（eqeqeq） <span class="ls-cap ignore-header">🔧 💡</span>

约定使用 `===` / `!==`，避免隐式类型转换带来的意外。

::: bad

```js
const valid = a == 1
```

:::

::: good

```js
const valid = a === 1
```

:::

## 禁用 var（no-var） <span class="ls-cap ignore-header">🔧</span>

约定用 `const` / `let` 取代 `var`。

::: bad

```js
var count = 0
```

:::

::: good

```js
let count = 0
```

:::

## 优先 const（prefer-const） <span class="ls-cap ignore-header">🔧</span>

从未重新赋值的变量约定使用 `const`。

::: bad

```js
let name = 'qwqo'
```

:::

::: good

```js
const name = 'qwqo'
```

:::

## 对象简写（object-shorthand） <span class="ls-cap ignore-header">🔧</span>

约定使用对象属性与方法简写。

::: bad

```js
const user = { id: id, getName: function () {} }
```

:::

::: good

```js
const user = { id, getName() {} }
```

:::

## 禁止抛出字面量（no-throw-literal）

约定只抛出 `Error` 对象，不抛出字面量。

::: bad

```js
throw 'something went wrong'
```

:::

::: good

```js
throw new Error('something went wrong')
```

:::

## 禁止 Yoda 条件（yoda） <span class="ls-cap ignore-header">🔧</span>

约定条件表达式变量在前。

::: bad

```js
if (1 === status) {
  retry()
}
```

:::

::: good

```js
if (status === 1) {
  retry()
}
```

:::

## 禁止无意义的重命名（no-useless-rename） <span class="ls-cap ignore-header">🔧</span>

约定不要把解构 / 导入 / 导出重命名为同名。

::: bad

```js
const { id: id } = user
```

:::

::: good

```js
const { id } = user
```

:::

## 禁止未使用变量（no-unused-vars） <span class="ls-cap ignore-header">💡</span>

约定不保留未使用的局部变量。函数参数和 `catch` 绑定不在默认检查范围内，避免为了规则批量改签名或重命名。

::: bad

```js
const unused = createValue()
export const used = 1
```

:::

::: good

```js
export const used = createValue()
```

:::

## 禁止 void 表达式（no-void）

不允许用 `void` 丢弃函数返回值，尤其不能用 `void promise()` 把异步调用伪装成已处理。

::: bad

```ts
void saveChanges()
```

:::

::: good

```ts
await saveChanges()
```

:::

若确实要忽略 Promise，应显式说明错误处理策略，例如使用 `catch`。TypeScript 项目建议同时开启 `typescript.typeAware`。

## 文件最大行数（max-lines）

约定单个文件不宜过长，过长往往意味着职责过多、应当拆分。由 `maxLines` 选项控制上限（默认 **500** 行，统计时跳过空行与注释），超出仅 `warn` 提示、不阻断。

::: bad

```js
// utils.js —— 把所有工具函数塞进一个文件（620 行）
export function a() {}
export function b() {}
// …此处省略 600+ 行
```

:::

::: good

```js
// 按职责拆成多个小文件
import { a } from './utils/a'
import { b } from './utils/b'
```

:::

通过 `maxLines` 选项调整上限或关闭（详见 [配置项总览](../guide/options)）：

```js
// eslint.config.js
export default qwqo({
  maxLines: 800, // 放宽到 800 行
  // maxLines: false, // 或彻底关闭
})
```

::: tip
基线层还包含大量安全相关规则（`no-eval`、`no-self-compare`、`no-unsafe-*`、`use-isnan` 等），完整列表见 [全部规则](../reference/rules) 或 [上游配置源码](https://github.com/neostandard/neostandard/blob/main/lib/configs/base.js)。
:::
