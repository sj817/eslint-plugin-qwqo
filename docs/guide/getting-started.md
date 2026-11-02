# 快速开始

## 安装

```bash
pnpm add -D eslint eslint-plugin-qwqo
```

## 配置

新建 `eslint.config.js`：

```js
import qwqo from 'eslint-plugin-qwqo'

export default qwqo({ node: true, typescript: true })
```

详见 [配置项总览](./options)。

## 脚本

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "eslint . --fix",
    "format:check": "eslint ."
  }
}
```

`lint` 同时检查代码质量和格式；`lint:fix` 与 `format` 都应用当前配置中启用规则的完整修复。格式细节见 [格式化](./formatting)。
