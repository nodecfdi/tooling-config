import stylistic from '@stylistic/eslint-plugin';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const stylisticConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { '@stylistic': stylistic },
  rules: {
    // Prettier doesn't have strong opinions about emptyLines. See: https://prettier.io/docs/en/rationale.html#empty-lines.
    '@stylistic/padding-line-between-statements': [
      'error',
      // blank lines after every sequence of variable declarations, like the newline-after-var rule.
      { blankLine: 'always', next: '*', prev: ['const', 'let'] },
      {
        blankLine: 'any',
        next: ['const', 'let'],
        prev: ['const', 'let'],
      },

      //require blank lines before all return statements, like the newline-before-return rule.
      { blankLine: 'always', next: 'return', prev: '*' },
    ],
    '@stylistic/lines-between-class-members': ['error', 'always'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/comma-spacing': 'error',
  },
});
