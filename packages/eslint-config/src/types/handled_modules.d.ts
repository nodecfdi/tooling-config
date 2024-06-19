type FlatRecommendedConfigs<T> = {
  'flat/recommended': T;
};

declare module '@adonisjs/eslint-plugin';
declare module '@eslint-community/eslint-plugin-eslint-comments';
declare module '@regru/eslint-plugin-prefer-early-return';
declare module 'eslint-plugin-canonical';
declare module 'eslint-plugin-promise';
declare module 'eslint-plugin-security';

declare module 'eslint-plugin-unicorn' {
  declare const configs: FlatRecommendedConfigs<NodeCfdiFlatAtomConfig>;
}

declare module 'eslint-plugin-vue' {
  declare const configs: FlatRecommendedConfigs<NodeCfdiFlatAtomConfig[]>;
}
