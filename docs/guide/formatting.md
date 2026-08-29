# 格式化

Lintspec 由 ESLint 同时负责代码质量与格式化。运行一次即可：

```bash
eslint . --fix
```

## 核心风格

- 2 空格缩进，不使用 Tab；
- 语句末尾不写分号；
- 普通字符串和 JSX 属性都使用单引号；
- 单参数箭头函数省略括号；
- 命名函数与括号之间留空格，例如 `function run () {}`；
- 对象花括号内侧保留空格；
- 多行数组、对象、导入导出、函数参数以及 TypeScript 枚举、泛型和元组都保留尾随逗号；
- 二元运算符通常留在上一行，三元表达式的 `?` 和 `:` 放在下一行开头。

## 换行策略

ESLint 的格式规则不是整棵语法树重排器。Lintspec 会统一缩进、空格、括号和尾随逗号，但不会因为表达式还没超过某个固定列宽，就擅自把作者主动写出的多行调用、数组或参数列表挤回一行。

```js
const result = createResult(
  firstArgument,
  secondArgument,
)
```

这沿用了 Neostandard 的思路：规则约束清楚，但保留对业务结构有意义的人工换行。

## 能力边界

ESLint 能胜任 JS、TS、JSX 与 Vue 脚本的日常格式化，但它不会统一 Markdown、YAML、CSS 等非代码文件，也不会主动按固定列宽把任意长表达式重新排版。

本仓库采用社区常见的职责拆分：代码只交给 ESLint；Markdown、JSON、YAML 和 CSS 由独立的非代码步骤处理。`pnpm format` 会先运行完整的 `eslint --fix`，再运行严格限定文件类型的非代码格式器。默认 Unicorn 层是固定的 22 条高置信度纠错白名单；会改写控制流、异步结构、类、数据结构或 Node/DOM/JavaScript API 的规则全部默认关闭，只有显式设置 `unicorn.strict: true` 才会参与修复。非代码配置同时满足：

- `.prettierignore` 明确排除所有 JS、TS、JSX、TSX 与 Vue 文件；
- `embeddedLanguageFormatting: 'off'`，不改写 Markdown 代码块；
- `proseWrap: 'preserve'`，不主动重排作者的 Markdown 段落换行；
- 忽略 `pnpm-lock.yaml` 和所有生成目录；
- 非代码格式器只属于本仓库，不随 `@qwqo/eslint-config` 发布，也不由脚手架安装。

因此日常仍然只有一个入口，但不存在第二个工具覆盖 ESLint 代码排版的问题。

## 编辑器

把 ESLint 设为代码文件的保存时修复器即可。VS Code 可使用：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"]
}
```
