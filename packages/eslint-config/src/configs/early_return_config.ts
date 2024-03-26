import preferEarlyReturn from '@regru/eslint-plugin-prefer-early-return';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

export const getEarlyReturnConfig = (): ExportableConfigAtom => {
  return {
    files: [allFilesSupported],
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
