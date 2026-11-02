# 全部规则

本页由配置自动生成，列出每一层启用的全部规则。具体规则的 ❌/✅ 示例见各[规则层](../layers/base)页面。

- **配置方式**：控制该规则的 `qwqo()` 选项；基线层规则只能通过 `overrides` 调整。
- **修复 / 建议**：✅ 修复 = 可通过 `eslint --fix` 自动修复；✅ 建议 = 在编辑器中提供修复建议。
- **级别**：<span class="ls-sev ls-sev-error">错误</span> 报错并阻断；<span class="ls-sev ls-sev-warn">警告</span> 仅提示。

## 基线层（108）

| 规则名称                                                                              | 规则                            | 配置方式    | 级别                                          | 修复 | 建议 |
| ------------------------------------------------------------------------------------- | ------------------------------- | ----------- | --------------------------------------------- | ---- | ---- |
| Enforce getter and setter pairs in objects and classes                                | `accessor-pairs`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 数组回调需返回值                                                                      | `array-callback-return`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| Enforce camelcase naming convention                                                   | `camelcase`                     | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 构造函数须调用 super()                                                                | `constructor-super`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Enforce consistent brace style for all control statements                             | `curly`                         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| default 置于最后                                                                      | `default-case-last`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 严格相等                                                                              | `eqeqeq`                        | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| 文件最大行数                                                                          | `max-lines`                     | `maxLines`  | <span class="ls-sev ls-sev-warn">警告</span>  | —    | —    |
| require error handling in callbacks                                                   | `n/handle-callback-err`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| enforce Node.js-style error-first callback pattern is followed                        | `n/no-callback-literal`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| disallow deprecated APIs                                                              | `n/no-deprecated-api`           | `overrides` | <span class="ls-sev ls-sev-warn">警告</span>  | —    | —    |
| disallow the assignment to `exports`                                                  | `n/no-exports-assign`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| disallow `new` operators with calls to `require`                                      | `n/no-new-require`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| disallow string concatenation with `__dirname`, `__filename`, and `import.meta` paths | `n/no-path-concat`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| require that `process.exit()` expressions use the same code path as `throw`           | `n/process-exit-as-throw`       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| —                                                                                     | `neostandard/jsx-key`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Require constructor names to begin with a capital letter                              | `new-cap`                       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow `Array` constructors                                                         | `no-array-constructor`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| 禁止 async Promise executor                                                           | `no-async-promise-executor`     | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow the use of `arguments.caller` or `arguments.callee`                          | `no-caller`                     | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 case 内声明                                                                      | `no-case-declarations`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止重写类                                                                            | `no-class-assign`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止与 -0 比较                                                                        | `no-compare-neg-zero`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止条件中赋值                                                                        | `no-cond-assign`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重写 const                                                                        | `no-const-assign`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止常量条件                                                                          | `no-constant-condition`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow control characters in regular expressions                                    | `no-control-regex`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁用 debugger                                                                         | `no-debugger`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 delete 变量                                                                      | `no-delete-var`                 | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重复函数参数                                                                      | `no-dupe-args`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重复类成员                                                                        | `no-dupe-class-members`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重复对象键                                                                        | `no-dupe-keys`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重复 case                                                                         | `no-duplicate-case`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止空代码块                                                                          | `no-empty`                      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止空字符类                                                                          | `no-empty-character-class`      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止空解构                                                                            | `no-empty-pattern`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁用 eval                                                                             | `no-eval`                       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重写异常参数                                                                      | `no-ex-assign`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止扩展原生类型                                                                      | `no-extend-native`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止多余的 bind                                                                       | `no-extra-bind`                 | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow unnecessary boolean casts                                                    | `no-extra-boolean-cast`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止 case 穿透                                                                        | `no-fallthrough`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重写函数声明                                                                      | `no-func-assign`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止改写全局对象                                                                      | `no-global-assign`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止隐式 eval                                                                         | `no-implied-eval`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止给导入赋值                                                                        | `no-import-assign`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow invalid regular expression strings in `RegExp` constructors                  | `no-invalid-regexp`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止异常空白字符                                                                      | `no-irregular-whitespace`       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow the use of the `__iterator__` property                                       | `no-iterator`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow labeled statements                                                           | `no-labels`                     | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow unnecessary nested blocks                                                    | `no-lone-blocks`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止精度丢失的数字                                                                    | `no-loss-of-precision`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止误导性字符类                                                                      | `no-misleading-character-class` | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| Disallow multiline strings                                                            | `no-multi-str`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow `new` operators outside of assignments or comparisons                        | `no-new`                        | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 Function 构造函数                                                                | `no-new-func`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 new 非构造函数                                                                   | `no-new-native-nonconstructor`  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow `new` operators with the `String`, `Number`, and `Boolean` objects           | `no-new-wrappers`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止把全局对象当函数调用                                                              | `no-obj-calls`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow calls to the `Object` constructor without an argument                        | `no-object-constructor`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| Disallow octal literals                                                               | `no-octal`                      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow octal escape sequences in string literals                                    | `no-octal-escape`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow the use of the `__proto__` property                                          | `no-proto`                      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止直接调用 Object.prototype 方法                                                    | `no-prototype-builtins`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止重复声明                                                                          | `no-redeclare`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止正则中多个空格                                                                    | `no-regex-spaces`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow assignment operators in `return` statements                                  | `no-return-assign`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止自我赋值                                                                          | `no-self-assign`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止自我比较                                                                          | `no-self-compare`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow comma operators                                                              | `no-sequences`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow identifiers from shadowing restricted names                                  | `no-shadow-restricted-names`    | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止稀疏数组                                                                          | `no-sparse-arrays`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止普通字符串中的模板占位符                                                          | `no-template-curly-in-string`   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 super() 前用 this                                                                | `no-this-before-super`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止抛出字面量                                                                        | `no-throw-literal`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止未声明变量                                                                        | `no-undef`                      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow initializing variables to `undefined`                                        | `no-undef-init`                 | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止易混淆的多行表达式                                                                | `no-unexpected-multiline`       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止未修改的循环条件                                                                  | `no-unmodified-loop-condition`  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止不可达代码                                                                        | `no-unreachable`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止只执行一次的循环                                                                  | `no-unreachable-loop`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 finally 中的控制流                                                               | `no-unsafe-finally`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止关系运算符左侧取反                                                                | `no-unsafe-negation`            | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| Disallow unused expressions                                                           | `no-unused-expressions`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止未使用变量                                                                        | `no-unused-vars`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止先使用后定义                                                                      | `no-use-before-define`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止无用的正则反向引用                                                                | `no-useless-backreference`      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止多余的 call/apply                                                                 | `no-useless-call`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止多余的 catch                                                                      | `no-useless-catch`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow unnecessary computed property keys in objects and classes                    | `no-useless-computed-key`       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow unnecessary constructors                                                     | `no-useless-constructor`        | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止多余的转义                                                                        | `no-useless-escape`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止无意义的重命名                                                                    | `no-useless-rename`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow redundant return statements                                                  | `no-useless-return`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁用 var                                                                              | `no-var`                        | `overrides` | <span class="ls-sev ls-sev-warn">警告</span>  | ✅   | —    |
| Disallow `void` operators                                                             | `no-void`                       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow `with` statements                                                            | `no-with`                       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 对象简写                                                                              | `object-shorthand`              | `overrides` | <span class="ls-sev ls-sev-warn">警告</span>  | ✅   | —    |
| Enforce variables to be declared either together or separately in functions           | `one-var`                       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 优先 const                                                                            | `prefer-const`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| reject 须用 Error                                                                     | `prefer-promise-reject-errors`  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow use of the `RegExp` constructor in favor of regular expression literals      | `prefer-regex-literals`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| Enforce consistent param names and ordering when creating new promises.               | `promise/param-names`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Require symbol descriptions                                                           | `symbol-description`            | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Require or disallow Unicode byte order mark (BOM)                                     | `unicode-bom`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 用 isNaN 判断 NaN                                                                     | `use-isnan`                     | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| typeof 比较有效字符串                                                                 | `valid-typeof`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止 Yoda 条件                                                                        | `yoda`                          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |

## unicorn（22）

| 规则名称                                                                                           | 规则                                                  | 配置方式  | 级别                                          | 修复 | 建议 |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------- | --------------------------------------------- | ---- | ---- |
| 禁止存取器中递归访问 this                                                                          | `unicorn/no-accessor-recursion`                       | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow boolean-returning sort comparators.                                                       | `unicorn/no-boolean-sort-comparator`                  | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| Disallow adjacent duplicate operands in logical expressions.                                       | `unicorn/no-duplicate-logical-operands`               | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| Disallow impossible comparisons against `.length` or `.size`.                                      | `unicorn/no-impossible-length-comparison`             | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止错误的 querySelector                                                                           | `unicorn/no-incorrect-query-selector`                 | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止对内置对象用 instanceof                                                                        | `unicorn/no-instanceof-builtins`                      | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| Disallow calling functions and constructors with an invalid number of arguments.                   | `unicorn/no-invalid-argument-count`                   | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow comparing a single character from a string to a multi-character string.                   | `unicorn/no-invalid-character-comparison`             | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止无效的 fetch 选项                                                                              | `unicorn/no-invalid-fetch-options`                    | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止无效的 removeEventListener                                                                     | `unicorn/no-invalid-remove-event-listener`            | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow invalid implementations of well-known symbol methods.                                     | `unicorn/no-invalid-well-known-symbol-methods`        | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| 禁止事件后访问 currentTarget                                                                       | `unicorn/no-late-current-target-access`               | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow event-control method calls after the synchronous event dispatch has finished.             | `unicorn/no-late-event-control`                       | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow checking a Map key before accessing a different key.                                      | `unicorn/no-mismatched-map-key`                       | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow misrefactored compound assignments where the target is duplicated in the right-hand side. | `unicorn/no-misrefactored-assignment`                 | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止 new Buffer()                                                                                  | `unicorn/no-new-buffer`                               | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| Disallow optional chaining on undeclared variables.                                                | `unicorn/no-optional-chaining-on-undeclared-variable` | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Prevent unsafe use of ArrayBuffer view `.buffer`.                                                  | `unicorn/no-unsafe-buffer-conversion`                 | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| Disallow reading `.value` from `Promise.allSettled()` results without a fulfilled status guard.    | `unicorn/no-unsafe-promise-all-settled-values`        | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow unsafe values as property keys.                                                           | `unicorn/no-unsafe-property-key`                      | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow non-literal replacement values in `String#replace()` and `String#replaceAll()`.           | `unicorn/no-unsafe-string-replacement`                | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Require boolean-returning Proxy traps to return booleans.                                          | `unicorn/require-proxy-trap-boolean-return`           | `unicorn` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |

## TypeScript（9）

| 规则名称                                              | 规则                                        | 配置方式     | 级别                                          | 修复 | 建议 |
| ----------------------------------------------------- | ------------------------------------------- | ------------ | --------------------------------------------- | ---- | ---- |
| Enforce consistent linebreak style for operators      | `@stylistic/operator-linebreak`             | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止 Array 构造函数                                   | `@typescript-eslint/no-array-constructor`   | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow duplicate class members                      | `@typescript-eslint/no-dupe-class-members`  | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow literal numbers that lose precision          | `@typescript-eslint/no-loss-of-precision`   | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow variable redeclaration                       | `@typescript-eslint/no-redeclare`           | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止未使用的表达式                                    | `@typescript-eslint/no-unused-expressions`  | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止未使用变量                                        | `@typescript-eslint/no-unused-vars`         | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| Disallow the use of variables before they are defined | `@typescript-eslint/no-use-before-define`   | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow unnecessary constructors                     | `@typescript-eslint/no-useless-constructor` | `typescript` | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |

## import-x（8）

| 规则名称           | 规则                                  | 配置方式             | 级别                                          | 修复 | 建议 |
| ------------------ | ------------------------------------- | -------------------- | --------------------------------------------- | ---- | ---- |
| 校验默认导入存在   | `import-x/default`                    | `importX`            | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止无效导出       | `import-x/export`                     | `importX`            | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 导入后缀一致       | `import-x/extensions`                 | `importX.extensions` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| 校验命名空间导入   | `import-x/namespace`                  | `importX`            | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重复导入       | `import-x/no-duplicates`              | `importX`            | <span class="ls-sev ls-sev-warn">警告</span>  | ✅   | —    |
| 禁止具名当默认导入 | `import-x/no-named-as-default`        | `importX`            | <span class="ls-sev ls-sev-warn">警告</span>  | —    | —    |
| 禁止具名当默认成员 | `import-x/no-named-as-default-member` | `importX`            | <span class="ls-sev ls-sev-warn">警告</span>  | —    | —    |
| 禁止无法解析的导入 | `import-x/no-unresolved`              | `importX`            | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |

## perfectionist（21）

| 规则名称          | 规则                                       | 配置方式             | 级别                                          | 修复 | 建议 |
| ----------------- | ------------------------------------------ | -------------------- | --------------------------------------------- | ---- | ---- |
| includes 数组排序 | `perfectionist/sort-array-includes`        | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 类成员排序        | `perfectionist/sort-classes`               | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 装饰器排序        | `perfectionist/sort-decorators`            | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 枚举排序          | `perfectionist/sort-enums`                 | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 导出属性排序      | `perfectionist/sort-export-attributes`     | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 导出排序          | `perfectionist/sort-exports`               | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 继承子句排序      | `perfectionist/sort-heritage-clauses`      | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 导入属性排序      | `perfectionist/sort-import-attributes`     | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 导入排序          | `perfectionist/sort-imports`               | `perfectionist.sort` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 接口属性排序      | `perfectionist/sort-interfaces`            | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 交叉类型排序      | `perfectionist/sort-intersection-types`    | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| JSX 属性排序      | `perfectionist/sort-jsx-props`             | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Map 排序          | `perfectionist/sort-maps`                  | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 模块排序          | `perfectionist/sort-modules`               | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 具名导出排序      | `perfectionist/sort-named-exports`         | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 具名导入排序      | `perfectionist/sort-named-imports`         | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 对象类型排序      | `perfectionist/sort-object-types`          | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Set 排序          | `perfectionist/sort-sets`                  | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| switch 分支排序   | `perfectionist/sort-switch-case`           | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 联合类型排序      | `perfectionist/sort-union-types`           | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 变量声明排序      | `perfectionist/sort-variable-declarations` | `perfectionist`      | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |

## React（12）

| 规则名称                        | 规则                                                           | 配置方式 | 级别                                          | 修复 | 建议 |
| ------------------------------- | -------------------------------------------------------------- | -------- | --------------------------------------------- | ---- | ---- |
| 禁止 innerHTML 与 children 并存 | `@eslint-react/dom-no-dangerously-set-innerhtml-with-children` | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止使用 render 返回值          | `@eslint-react/dom-no-render-return-value`                     | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 javascript: URL            | `@eslint-react/dom-no-script-url`                              | `react`  | <span class="ls-sev ls-sev-warn">警告</span>  | —    | —    |
| 禁止不安全的 iframe sandbox     | `@eslint-react/dom-no-unsafe-iframe-sandbox`                   | `react`  | <span class="ls-sev ls-sev-warn">警告</span>  | —    | —    |
| 禁止空元素带 children           | `@eslint-react/dom-no-void-elements-with-children`             | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 children 属性与子节点并存  | `@eslint-react/jsx-no-children-prop-with-children`             | `react`  | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| 禁止展开后再写 key              | `@eslint-react/jsx-no-key-after-spread`                        | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 JSX 命名空间语法           | `@eslint-react/jsx-no-namespace`                               | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止直接修改 state              | `@eslint-react/no-direct-mutation-state`                       | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 列表须有 key                    | `@eslint-react/no-missing-key`                                 | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Hook 依赖完整                   | `react-hooks/exhaustive-deps`                                  | `react`  | <span class="ls-sev ls-sev-warn">警告</span>  | ✅   | ✅   |
| enforces the Rules of Hooks     | `react-hooks/rules-of-hooks`                                   | `react`  | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |

## Vue（85）

| 规则名称                            | 规则                                         | 配置方式 | 级别                                          | 修复 | 建议 |
| ----------------------------------- | -------------------------------------------- | -------- | --------------------------------------------- | ---- | ---- |
| 支持模板注释指令                    | `vue/comment-directive`                      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 标记 JSX 中使用的变量               | `vue/jsx-uses-vars`                          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 组件名多词                          | `vue/multi-word-component-names`             | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 watch 用箭头函数               | `vue/no-arrow-functions-in-watch`            | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 computed 中异步                | `vue/no-async-in-computed-properties`        | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止被指令覆盖的子内容              | `vue/no-child-content`                       | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止 data 中访问 computed           | `vue/no-computed-properties-in-data`         | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 data 对象声明            | `vue/no-deprecated-data-object-declaration`  | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的 $delete/$set             | `vue/no-deprecated-delete-set`               | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 destroyed 钩子           | `vue/no-deprecated-destroyed-lifecycle`      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的 $listeners               | `vue/no-deprecated-dollar-listeners-api`     | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 $scopedSlots             | `vue/no-deprecated-dollar-scopedslots-api`   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的事件 API                  | `vue/no-deprecated-events-api`               | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的过滤器语法                | `vue/no-deprecated-filter`                   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 functional 模板          | `vue/no-deprecated-functional-template`      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 HTML 元素上废弃的 is           | `vue/no-deprecated-html-element-is`          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 inline-template          | `vue/no-deprecated-inline-template`          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 model 定义               | `vue/no-deprecated-model-definition`         | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止 props 默认函数中的 this        | `vue/no-deprecated-props-default-this`       | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 RouterLink 废弃的 tag          | `vue/no-deprecated-router-link-tag-prop`     | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 scope 属性               | `vue/no-deprecated-scope-attribute`          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的 slot 属性                | `vue/no-deprecated-slot-attribute`           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的 slot-scope 属性          | `vue/no-deprecated-slot-scope-attribute`     | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的 .sync                    | `vue/no-deprecated-v-bind-sync`              | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的 v-is                     | `vue/no-deprecated-v-is`                     | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的 .native                  | `vue/no-deprecated-v-on-native-modifier`     | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止废弃的按键码修饰符              | `vue/no-deprecated-v-on-number-modifiers`    | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止废弃的 Vue.config.keyCodes      | `vue/no-deprecated-vue-config-keycodes`      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止字段名重复                      | `vue/no-dupe-keys`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 v-if 链重复条件                | `vue/no-dupe-v-else-if`                      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止重复属性                        | `vue/no-duplicate-attributes`                | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 script setup 中 export         | `vue/no-export-in-script-setup`              | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 await 后注册 expose            | `vue/no-expose-after-await`                  | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 await 后注册生命周期           | `vue/no-lifecycle-after-await`               | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止修改 props                      | `vue/no-mutating-props`                      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止模板解析错误                    | `vue/no-parsing-error`                       | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 ref 直接作操作数               | `vue/no-ref-as-operand`                      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止保留组件名                      | `vue/no-reserved-component-names`            | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止覆盖保留键                      | `vue/no-reserved-keys`                       | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止保留的 prop 名                  | `vue/no-reserved-props`                      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| data 须为函数                       | `vue/no-shared-component-data`               | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| 禁止 computed 中副作用              | `vue/no-side-effects-in-computed-properties` | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 template 上的 key              | `vue/no-template-key`                        | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 textarea 中插值                | `vue/no-textarea-mustache`                   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止未使用组件                      | `vue/no-unused-components`                   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止未使用的模板变量                | `vue/no-unused-vars`                         | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | ✅   |
| 禁止把 computed 当方法              | `vue/no-use-computed-property-like-method`   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 v-if 与 v-for 同元素           | `vue/no-use-v-if-with-v-for`                 | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 template 上无用属性            | `vue/no-useless-template-attributes`         | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 template v-for 的 key 放子元素 | `vue/no-v-for-template-key-on-child`         | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止组件上用 v-text/v-html          | `vue/no-v-text-v-html-on-component`          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 禁止 await 后注册 watch             | `vue/no-watch-after-await`                   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 优先从 vue 导入                     | `vue/prefer-import-from-vue`                 | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| &lt;component&gt; 须有 :is          | `vue/require-component-is`                   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| prop 类型须为构造函数               | `vue/require-prop-type-constructor`          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| render 须返回值                     | `vue/require-render-return`                  | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| $slots 须作为函数调用               | `vue/require-slots-as-functions`             | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| transition 内须控制显示             | `vue/require-toggle-inside-transition`       | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-for 须有 key                      | `vue/require-v-for-key`                      | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| prop 默认值须有效                   | `vue/require-valid-default-prop`             | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| computed 须有 return                | `vue/return-in-computed-property`            | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| emits 校验器须有 return             | `vue/return-in-emits-validator`              | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-on 须用 exact 修饰符              | `vue/use-v-on-exact`                         | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| 属性名须有效                        | `vue/valid-attribute-name`                   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| defineEmits 须有效                  | `vue/valid-define-emits`                     | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| defineOptions 须有效                | `vue/valid-define-options`                   | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| defineProps 须有效                  | `vue/valid-define-props`                     | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| nextTick 调用须有效                 | `vue/valid-next-tick`                        | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | ✅   | ✅   |
| 模板根须有效                        | `vue/valid-template-root`                    | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-bind 须有效                       | `vue/valid-v-bind`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-cloak 须有效                      | `vue/valid-v-cloak`                          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-else 须有效                       | `vue/valid-v-else`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-else-if 须有效                    | `vue/valid-v-else-if`                        | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-for 须有效                        | `vue/valid-v-for`                            | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-html 须有效                       | `vue/valid-v-html`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-if 须有效                         | `vue/valid-v-if`                             | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-is 须有效                         | `vue/valid-v-is`                             | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-memo 须有效                       | `vue/valid-v-memo`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-model 须有效                      | `vue/valid-v-model`                          | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-on 须有效                         | `vue/valid-v-on`                             | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-once 须有效                       | `vue/valid-v-once`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-pre 须有效                        | `vue/valid-v-pre`                            | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-show 须有效                       | `vue/valid-v-show`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-slot 须有效                       | `vue/valid-v-slot`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| v-text 须有效                       | `vue/valid-v-text`                           | `vue`    | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |

## Stylistic（59）

| 规则名称                                                                                                                                     | 规则                                       | 配置方式    | 级别                                          | 修复 | 建议 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ----------- | --------------------------------------------- | ---- | ---- |
| Enforce consistent spacing inside array brackets                                                                                             | `@stylistic/array-bracket-spacing`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing before and after the arrow in arrow functions                                                                     | `@stylistic/arrow-spacing`                 | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow or enforce spaces inside of blocks after opening block and before closing block                                                     | `@stylistic/block-spacing`                 | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent brace style for blocks                                                                                                    | `@stylistic/brace-style`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow trailing commas                                                                                                          | `@stylistic/comma-dangle`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing before and after commas                                                                                           | `@stylistic/comma-spacing`                 | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent comma style                                                                                                               | `@stylistic/comma-style`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing inside computed property brackets                                                                                 | `@stylistic/computed-property-spacing`     | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent newlines before and after dots                                                                                            | `@stylistic/dot-location`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow newline at the end of files                                                                                              | `@stylistic/eol-last`                      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow spacing between function identifiers and their invocations                                                               | `@stylistic/function-call-spacing`         | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing around `*` operators in generator functions                                                                       | `@stylistic/generator-star-spacing`        | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent indentation                                                                                                               | `@stylistic/indent`                        | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce closing bracket location in JSX                                                                                                      | `@stylistic/jsx-closing-bracket-location`  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce closing tag location for multiline JSX                                                                                               | `@stylistic/jsx-closing-tag-location`      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes | `@stylistic/jsx-curly-brace-presence`      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent linebreaks in curly braces in JSX attributes and expressions                                                              | `@stylistic/jsx-curly-newline`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce or disallow spaces inside of curly braces in JSX attributes and expressions                                                          | `@stylistic/jsx-curly-spacing`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce or disallow spaces around equal signs in JSX attributes                                                                              | `@stylistic/jsx-equals-spacing`            | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce proper position of the first property in JSX                                                                                         | `@stylistic/jsx-first-prop-new-line`       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce props indentation in JSX                                                                                                             | `@stylistic/jsx-indent-props`              | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce PascalCase for user-defined JSX components                                                                                           | `@stylistic/jsx-pascal-case`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Enforce the consistent use of either double or single quotes in JSX attributes                                                               | `@stylistic/jsx-quotes`                    | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce whitespace in and around the JSX opening and closing brackets                                                                        | `@stylistic/jsx-tag-spacing`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow missing parentheses around multiline JSX                                                                                            | `@stylistic/jsx-wrap-multilines`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing between property names and type annotations in types and interfaces                                               | `@stylistic/key-spacing`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing before and after keywords                                                                                         | `@stylistic/keyword-spacing`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow an empty line between class members                                                                                      | `@stylistic/lines-between-class-members`   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce newlines between operands of ternary expressions                                                                                     | `@stylistic/multiline-ternary`             | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce or disallow parentheses when invoking a constructor with no arguments                                                                | `@stylistic/new-parens`                    | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow unnecessary parentheses                                                                                                             | `@stylistic/no-extra-parens`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow leading or trailing decimal points in numeric literals                                                                              | `@stylistic/no-floating-decimal`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow mixed binary operators                                                                                                              | `@stylistic/no-mixed-operators`            | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow mixed spaces and tabs for indentation                                                                                               | `@stylistic/no-mixed-spaces-and-tabs`      | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow multiple spaces                                                                                                                     | `@stylistic/no-multi-spaces`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow multiple empty lines                                                                                                                | `@stylistic/no-multiple-empty-lines`       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow all tabs                                                                                                                            | `@stylistic/no-tabs`                       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | —    | —    |
| Disallow trailing whitespace at the end of lines                                                                                             | `@stylistic/no-trailing-spaces`            | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Disallow whitespace before properties                                                                                                        | `@stylistic/no-whitespace-before-property` | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent line breaks after opening and before closing braces                                                                       | `@stylistic/object-curly-newline`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing inside braces                                                                                                     | `@stylistic/object-curly-spacing`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce placing object properties on separate lines                                                                                          | `@stylistic/object-property-newline`       | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent linebreak style for operators                                                                                             | `@stylistic/operator-linebreak`            | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow padding within blocks                                                                                                    | `@stylistic/padded-blocks`                 | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require quotes around object literal, type literal, interfaces and enums property names                                                      | `@stylistic/quote-props`                   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce the consistent use of either backticks, double, or single quotes                                                                     | `@stylistic/quotes`                        | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce spacing between rest and spread operators and their expressions                                                                      | `@stylistic/rest-spread-spacing`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow semicolons instead of ASI                                                                                                | `@stylistic/semi`                          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing before and after semicolons                                                                                       | `@stylistic/semi-spacing`                  | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing before blocks                                                                                                     | `@stylistic/space-before-blocks`           | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing before function parenthesis                                                                                       | `@stylistic/space-before-function-paren`   | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing inside parentheses                                                                                                | `@stylistic/space-in-parens`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require spacing around infix operators                                                                                                       | `@stylistic/space-infix-ops`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing before or after unary operators                                                                                   | `@stylistic/space-unary-ops`               | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Enforce consistent spacing after the `//` or `/*` in a comment                                                                               | `@stylistic/spaced-comment`                | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow spacing around embedded expressions of template strings                                                                  | `@stylistic/template-curly-spacing`        | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow spacing between template tags and their literals                                                                         | `@stylistic/template-tag-spacing`          | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require parentheses around immediate `function` invocations                                                                                  | `@stylistic/wrap-iife`                     | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
| Require or disallow spacing around the `*` in `yield*` expressions                                                                           | `@stylistic/yield-star-spacing`            | `overrides` | <span class="ls-sev ls-sev-error">错误</span> | ✅   | —    |
