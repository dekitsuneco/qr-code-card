module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'warn',
    'unused-imports/no-unused-vars-ts': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
  ignorePatterns: ['.eslintrc.js']
};