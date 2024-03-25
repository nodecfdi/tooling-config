import eslintPrettierConfig from 'eslint-config-prettier';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { supportedFileTypes } from './constants.js';

const prettierOverrides: ExportableConfigAtom = {
  files: [supportedFileTypes],
  rules: {
    curly: ['error', 'all'],
  },
};

export const getPrettierConfig = (): ExportableConfigAtom[] => [
  eslintPrettierConfig,
  prettierOverrides,
];
