/* eslint-disable sonarjs/no-duplicate-string */
import { type ExportableConfigAtom } from '../types/index.ts';
import { supportedFileTypes } from './constants.ts';

const eslintBaseHandPickedRules = {
  'func-style': 'error',
  'no-promise-executor-return': 'error',
  'no-unreachable-loop': 'error',
  'no-caller': 'error',
  'no-restricted-imports': ['error', { paths: ['prop-types'] }],
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-implicit-coercion': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-new-wrappers': 'error',
  'no-new-object': 'error',
  'no-restricted-properties': [
    'error',
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
  ],
  'strict': ['error', 'never'],
  'no-octal-escape': 'error',
  'no-proto': 'error',
  'no-sequences': ['error', { allowInParentheses: false }],
  'no-unmodified-loop-condition': 'error',
  'no-void': 'error',
  'no-array-constructor': 'error',
  'no-multi-assign': 'error',
  'no-plusplus': 'error',
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'no-useless-call': 'error',
  'prefer-object-has-own': 'error',
  'no-constant-binary-expression': 'error',
  'no-lone-blocks': 'error',
  'no-eval': 'error',
  'no-return-assign': ['error', 'always'],
  'no-else-return': ['error', { allowElseIf: false }],
  'prefer-template': 'error',
  'operator-assignment': ['error', 'never'],
  'logical-assignment-operators': ['error', 'never'],
  'prefer-object-spread': 'error',
  'no-param-reassign': ['error', { props: true }],
  'no-redeclare': 'error',
  'array-callback-return': ['error', { allowImplicit: true, checkForEach: true }],
  'object-shorthand': 'error',
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'require-atomic-updates': 'error',
  'no-nested-ternary': 'error',
  'no-console': ['error', { allow: ['warn', 'error', 'debug', 'info', 'table'] }],
  'eqeqeq': 'error',
  'prefer-arrow-callback': 'error',
  'no-return-await': 'off',
  'no-use-before-define': 'off', // we are using the @typescript/eslint version
  'no-unused-expressions': 'off', // we are using the @typescript/eslint version
  'no-empty-function': 'off', // we are using the @typescript/eslint version
  'dot-notation': 'off', // we are using the @typescript/eslint version
  'no-shadow': 'off', // we are using the @typescript/eslint version
  'default-param-last': 'off', // we are using the @typescript/eslint version
  'arrow-body-style': 'off', // we are using the eslint-plugin-arrow-return-style version
};

export const getEslintBaseConfig = (): ExportableConfigAtom => {
  return {
    files: [supportedFileTypes],
    rules: eslintBaseHandPickedRules,
  };
};
