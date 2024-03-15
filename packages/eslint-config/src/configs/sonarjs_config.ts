import sonarjs from 'eslint-plugin-sonarjs';
import { type ExportableConfigAtom } from '../types/index.ts';
import { supportedFileTypes } from './constants.ts';

const sonarjsHandPickedRules = {
  'sonarjs/cognitive-complexity': 'off',
  'sonarjs/prefer-immediate-return': 'off',
};

export const getSonarjsConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: { sonarjs },
    rules: {
      ...sonarjs.configs.recommended.rules,
      ...sonarjsHandPickedRules,
    },
  };
};
