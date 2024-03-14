import eslintRecommended from '@eslint/js';
import tseslint from 'typescript-eslint';
import { type ExportableConfigAtom, type NodecfdiSettings } from '../types/index.ts';
import { allJsExtensions, supportedFileTypes } from './constants.ts';

const getLanguageOptionsTypescript = (userChosenTsConfig?: string | string[]) => {
  return {
    parser: tseslint.parser,
    parserOptions: {
      project: userChosenTsConfig || true,
    },
  };
};

const tsNamingConventionRule = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      modifiers: ['const'],
      types: ['string', 'number'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'objectLiteralProperty',
      format: null,
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['is', 'has', 'should', 'can'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: null,
    },
    {
      selector: 'typeProperty',
      format: null,
    },
    {
      selector: 'class',
      format: ['PascalCase'],
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z]',
        match: false,
      },
    },
  ],
};

const typescriptHandPickedRules = {
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-check': true,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': false,
      'ts-nocheck': false,
    },
  ],
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-array-constructor': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/consistent-type-definitions': 'error',
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: { string: true } }],
  '@typescript-eslint/unified-signatures': 'error',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/no-shadow': [
    'error',
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true,
    },
  ],
};

export const getTypescriptConfig = (
  userConfigChoices: NodecfdiSettings,
): ExportableConfigAtom[] => {
  const customTSConfigPath = userConfigChoices.pathsOveriddes?.tsconfigLocation;
  const tseslintConfigs = [
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ];
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
      files: [`**/*.{${allJsExtensions}}`],
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      languageOptions: getLanguageOptionsTypescript(customTSConfigPath),
    },
    {
      files: [supportedFileTypes],
      rules: {
        ...tseslintRules,
        ...typescriptHandPickedRules,
        ...tsNamingConventionRule,
      },
    },
  ];
};
