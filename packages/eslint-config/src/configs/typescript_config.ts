import eslintRecommended from '@eslint/js';
import { configs, plugin } from 'typescript-eslint';
import { type ExportableConfigAtom } from '../types/flat_config.js';
import { allJsExtensions, supportedFileTypes } from './constants.js';

const tsNamingConventionRule = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'forbid',
      modifiers: ['const'],
      selector: 'variable',
      trailingUnderscore: 'forbid',
      types: ['string', 'number'],
    },
    {
      format: null,
      leadingUnderscore: 'allowSingleOrDouble',
      selector: 'objectLiteralProperty',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['PascalCase'],
      leadingUnderscore: 'forbid',
      selector: 'typeLike',
      trailingUnderscore: 'forbid',
    },
    {
      format: ['PascalCase'],
      leadingUnderscore: 'forbid',
      prefix: ['is', 'has', 'should', 'can'],
      selector: 'variable',
      trailingUnderscore: 'forbid',
      types: ['boolean'],
    },
    {
      format: null,
      modifiers: ['destructured'],
      selector: 'variable',
    },
    {
      format: null,
      selector: 'typeProperty',
    },
    {
      format: ['PascalCase'],
      selector: 'class',
    },
    {
      custom: {
        match: false,
        regex: '^I[A-Z]',
      },
      format: ['PascalCase'],
      selector: 'interface',
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    },
  ],
};

const typescriptHandPickedRules = {
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-check': true,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': false,
      'ts-nocheck': false,
    },
  ],
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/no-array-constructor': 'off',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-shadow': [
    'error',
    {
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      hoist: 'all',
      ignoreFunctionTypeParameterNameValueShadow: true,
      ignoreTypeValueShadow: true,
    },
  ],
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
      enforceForJSX: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: { string: true } }],
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/unified-signatures': 'error',
};

export const getTypescriptConfig = (): ExportableConfigAtom[] => {
  const tseslintConfigs = [...configs.strictTypeChecked, ...configs.stylisticTypeChecked];
  const rules = tseslintConfigs.map((config) => config.rules ?? {});
  let tseslintRules = {};

  for (const rule of rules) {
    tseslintRules = {
      ...tseslintRules,
      ...rule,
    };
  }

  return [
    {
      files: [supportedFileTypes],
      rules: eslintRecommended.configs.recommended.rules,
    },
    {
      files: [`**/*.{${allJsExtensions},.d.ts}`],
      plugins: {
        '@typescript-eslint': plugin,
      },
    },
    {
      files: [supportedFileTypes],
      rules: {
        ...tseslintRules,
        ...typescriptHandPickedRules,
        ...tsNamingConventionRule,
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-shadow': 'off',
      },
    },
  ];
};
