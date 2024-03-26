import eslintPrettierConfig from 'eslint-config-prettier';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

const prettierOverrides: ExportableConfigAtom = {
  files: [allFilesSupported],
  rules: {
    curly: ['error', 'all'],
  },
};

export const getPrettierConfig = (): ExportableConfigAtom[] => [
  eslintPrettierConfig,
  prettierOverrides,
];
