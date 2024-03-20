import stylistic from '@stylistic/eslint-plugin';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { supportedFileTypes } from './constants.js';

const stylisticHandPickedRules = {
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
};

export const getStylisticConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: { '@stylistic': stylistic },
    rules: stylisticHandPickedRules,
  };
};
