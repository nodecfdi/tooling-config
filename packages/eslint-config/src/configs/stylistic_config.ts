import stylistic from '@stylistic/eslint-plugin';
import { supportedFileTypes } from './constants.ts';
import { type ExportableConfigAtom } from '../types/index.ts';

const stylisticHandPickedRules = {
  // Prettier doesn't have strong opinions about emptyLines. See: https://prettier.io/docs/en/rationale.html#empty-lines.
  '@stylistic/padding-line-between-statements': [
    'error',
    // blank lines after every sequence of variable declarations, like the newline-after-var rule.
    { blankLine: 'always', prev: ['const', 'let'], next: '*' },
    {
      blankLine: 'any',
      prev: ['const', 'let'],
      next: ['const', 'let'],
    },

    //require blank lines before all return statements, like the newline-before-return rule.
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
};

export const getStylisticConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: { '@stylistic': stylistic },
    rules: stylisticHandPickedRules,
  };
};
