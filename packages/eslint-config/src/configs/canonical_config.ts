import canonicalPlugin from 'eslint-plugin-canonical';
import { allFilesSupported } from '../constants.js';
import { defineConfig } from '../define_config.js';

export const canonicalConfig = defineConfig({
  files: [allFilesSupported],
  plugins: {
    canonical: canonicalPlugin,
  },
  rules: {
    'canonical/destructuring-property-newline': 'off',
    'canonical/export-specifier-newline': 'off',
    'canonical/filename-match-exported': 'off',
    'canonical/filename-match-regex': 'off',
    'canonical/filename-no-index': 'off',
    'canonical/id-match': 'off',
    'canonical/import-specifier-newline': 'off',
    'canonical/no-import-namespace-destructure': 'error',
    'canonical/no-restricted-strings': 'off',
    'canonical/no-use-extend-native': 'error',
    'canonical/require-extension': ['error', { ignorePackages: true }],
    'canonical/sort-destructure-keys': 'error',
    'canonical/sort-keys': 'off',
    'canonical/prefer-inline-type-import': 'error',
  },
});
