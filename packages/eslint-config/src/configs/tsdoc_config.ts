import tsdocPlugin from 'eslint-plugin-tsdoc';
import { supportedFileTypes } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const tsdocConfig = defineConfig({
  files: [supportedFileTypes],
  plugins: {
    tsdoc: tsdocPlugin,
  },
  rules: {
    'tsdoc/syntax': 'error',
  },
});
