import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import { type ExportableConfigAtom } from '../types/index.ts';
import { supportedFileTypes } from './constants.ts';

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
