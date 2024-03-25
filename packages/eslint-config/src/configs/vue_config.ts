import pluginVue from 'eslint-plugin-vue';
import { type ExportableConfigAtom, type Rules } from '../types/flat_config.js';

const vueHandPickedRules: Rules = {
  'vue/block-lang': [
    'error',
    {
      script: {
        lang: 'ts',
      },
    },
  ],
  'vue/block-order': 'error',
  'vue/block-tag-newline': 'error',
  'vue/component-api-style': ['error', ['script-setup']],
  'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  'vue/component-options-name-casing': ['error', 'kebab-case'],
  'vue/define-macros-order': 'error',
  'vue/define-props-declaration': ['error', 'runtime'],
  'vue/no-empty-component-block': 'error',
  'vue/no-multiple-objects-in-class': 'error',
  'vue/no-ref-object-reactivity-loss': 'error',
  'vue/no-required-prop-with-default': 'error',
  'vue/no-root-v-if': 'error',
  'vue/no-template-target-blank': 'error',
  'vue/no-unused-properties': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-use-v-else-with-v-for': 'error',
  'vue/no-useless-mustaches': 'error',
  'vue/padding-line-between-blocks': 'error',
  'vue/prefer-true-attribute-shorthand': 'error',
  'vue/require-typed-ref': 'error',
  'vue/static-class-names-order': 'error',
};

export const getVueConfig = (): ExportableConfigAtom[] => {
  return [
    pluginVue.configs['flat/recommended'] as ExportableConfigAtom,
    {
      files: ['**/*.vue'],
      rules: vueHandPickedRules,
    },
  ];
};
