# eslint-plugin-qwqo

ESLint flat config built on [neostandard](https://github.com/neostandard/neostandard), with optional TypeScript, import, sorting, React, Vue and Unicorn layers.

Requires Node.js 22.13 or later and ESLint 10.

```sh
pnpm add -D eslint eslint-plugin-qwqo
```

```js
// eslint.config.mjs
import qwqo from 'eslint-plugin-qwqo'

export default qwqo({ node: true, typescript: true })
```

Use `noStyle: true` when Prettier owns formatting. The named `plugins` export exposes neostandard's plugin instances for project-specific rules.

See the [documentation](https://eslint.qwqo.cn/) for all options.
