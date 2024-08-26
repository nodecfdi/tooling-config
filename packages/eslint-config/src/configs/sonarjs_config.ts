import sonarjs from 'eslint-plugin-sonarjs';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const sonarjsConfig = defineConfig({
  files: [allFilesSupported],
  plugins: { sonarjs },
  rules: {
    ...sonarjs.configs.recommended.rules,
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/prefer-immediate-return': 'off',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
});
