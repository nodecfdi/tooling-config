import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import { supportedFileTypes } from './constants.ts';
import { type ExportableConfigAtom } from '../types/index.ts';

export const getEarlyReturnConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: { '@regru/prefer-early-return': preferEarlyReturn },
    rules: {
      '@regru/prefer-early-return/prefer-early-return': [
        'error',
        {
          maximumStatements: 1,
        },
      ],
    },
  };
};
