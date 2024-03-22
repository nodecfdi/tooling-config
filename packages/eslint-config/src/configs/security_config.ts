import securityPlugin from 'eslint-plugin-security';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { supportedFileTypes } from './constants.js';

const securityHandPickedRules = {
  'security/detect-buffer-noassert': 'error',
  'security/detect-child-process': 'error',
  'security/detect-disable-mustache-escape': 'error',
  'security/detect-eval-with-expression': 'error',
  'security/detect-new-buffer': 'error',
  'security/detect-no-csrf-before-method-override': 'error',
  'security/detect-non-literal-regexp': 'error',
  'security/detect-non-literal-require': 'error',
  'security/detect-possible-timing-attacks': 'error',
  'security/detect-pseudoRandomBytes': 'error',
  'security/detect-unsafe-regex': 'error',
  'security/detect-bidi-characters': 'error',
};

export const getSecurityConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    plugins: {
      security: securityPlugin,
    },
    rules: securityHandPickedRules,
  };
};
