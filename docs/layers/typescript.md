# TypeScript 层

TypeScript 层沿用 Neostandard 的做法：使用 TypeScript parser，并把 ESLint 核心规则映射到 `@typescript-eslint` 的同名扩展规则。TypeScript 编译器已经覆盖的检查不会重复执行。

它默认不强制这些带有项目策略或迁移倾向的规则：

- `consistent-type-imports` 与 `no-import-type-side-effects`；
- `no-explicit-any`；
- `naming-convention`；
- `no-require-imports` 与 namespace/API 迁移；
- 依赖类型信息的建议性简化规则。

因此开启 `typescript: true` 不会批量改写导入形式、命名、断言或模块写法。

```js
export default lintspec({ typescript: true })
```

## 类型感知

显式开启 `typeAware` 后，Lintspec 会使用项目的 tsconfig，并额外检查未处理的 Promise：

```js
export default lintspec({
  typescript: { typeAware: true },
})
```

`@typescript-eslint/no-floating-promises` 不允许用 `void promise()` 绕过检查；基线层的 `no-void` 也始终生效。其它需要类型信息、可能改写程序表达方式的推荐规则仍不会自动启用。

完整生效规则见 [全部规则](../reference/rules)。
