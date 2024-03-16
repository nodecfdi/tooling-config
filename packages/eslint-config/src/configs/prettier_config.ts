import eslintPrettierConfig from 'eslint-config-prettier';
import { type ExportableConfigAtom } from '../types/index.ts';
import { supportedFileTypes } from './constants.ts';

const prettierOverrides = {
  files: [supportedFileTypes],
  rules: {
    curly: ['error', 'all'],
  },
};

export const getPrettierConfig = (): ExportableConfigAtom[] => [
  eslintPrettierConfig,
  prettierOverrides,
];
