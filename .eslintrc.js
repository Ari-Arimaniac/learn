module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: [
    'standard'
  ],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      extends: 'standard-with-typescript',
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': ['off', {
          allowConciseArrowFunctionExpressionsStartingWithVoid: true
        }]
      },
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
}
