module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },

  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': ['error'],
    'react-refresh/only-export-components': 'warn',
  },
}
