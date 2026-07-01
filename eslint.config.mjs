import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  jsonc: false, // 不检查 JSON 类文件
  yaml: false, // 不检查 YAML 类文件
})
