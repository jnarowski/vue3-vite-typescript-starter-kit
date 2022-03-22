module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    defineProps: 'readonly',
  },
  rules: {
    // this is aleady checked by @vue/standard so this would double it up
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
    // see
    // https://vuejs.org/style-guide/rules-recommended.html#single-file-component-top-level-element-order
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
  },
}
