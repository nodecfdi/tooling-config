import commentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import { type ExportableConfigAtom, type Rules } from '../types/flat_config.js';
import { supportedFileTypes } from './constants.js';

const commentsHandPickedRules: Rules = {
  '@eslint-community/eslint-comments/disable-enable-pair': [
    'error',
    {
      allowWholeFile: true,
    },
  ],
  '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
  '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
  '@eslint-community/eslint-comments/no-restricted-disable': 'off',
  '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
  '@eslint-community/eslint-comments/no-unused-disable': 'off',
  '@eslint-community/eslint-comments/no-unused-enable': 'error',
  '@eslint-community/eslint-comments/no-use': 'off',
  '@eslint-community/eslint-comments/require-description': 'off',
};

export const getCommentsConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: {
      '@eslint-community/eslint-comments': commentsPlugin,
    },
    rules: commentsHandPickedRules,
  };
};
