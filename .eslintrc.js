module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },

  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'wrap-iife': false,
    indent: ['error', 2],
    'object-curly-newline': 'off',
    'no-trailing-spaces': 'error',
    'no-tabs': 0,
    curly: 'error',
    'react/react-in-jsx-scope': 'off',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
