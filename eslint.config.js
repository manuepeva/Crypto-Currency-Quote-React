import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    ignores: ['node_modules', 'build', 'dist'],
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
