import sonarjs from 'eslint-plugin-sonarjs';
import { type ExportableConfigAtom, type Rules } from '../types/flat_config.js';
import { allFilesSupported } from './constants.js';

const sonarjsHandPickedRules: Rules = {
  'sonarjs/cognitive-complexity': 'off',
  'sonarjs/prefer-immediate-return': 'off',
};

export const getSonarjsConfig = (): ExportableConfigAtom => {
  return {
    files: [allFilesSupported],
    plugins: { sonarjs },
    rules: {
      ...sonarjs.configs.recommended.rules,
      ...sonarjsHandPickedRules,
    },
  };
};
