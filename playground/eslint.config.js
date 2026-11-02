import qwqo from 'eslint-plugin-qwqo'

// 演练场启用全部规则层；各层按文件类型自动生效。
export default qwqo({
  browser: true,
  importX: true,
  node: true,
  perfectionist: true,
  react: true,
  typescript: true,
  vue: true,
})
