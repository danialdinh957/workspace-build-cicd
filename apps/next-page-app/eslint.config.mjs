import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'next',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    rules: {
      'react/react-in-jsx-scope': 0,
      'react-hooks/exhaustive-deps': 'error',
      '@next/next/no-img-element': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-extra-semi': 0,
    },
  }),
]

export default eslintConfig
