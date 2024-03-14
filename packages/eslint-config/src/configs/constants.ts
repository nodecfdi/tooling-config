export const allJsExtensions = 'js,mjs,cjs,ts,mts,cts';

export const supportedFileTypes = `**/*.{${allJsExtensions}}`;

export const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/artifacts/**',
  '**/coverage/**',
  '**/eslint.config.{js,mjs,cjs,cts}', // we currently cannot lint the eslint.config.js itself. It is currently only provided as a .js file and this config currently only supports .ts files. Therefore, eslint.config.js can only be re-enabled once this config support pure .js files too, or the ESLint team support the eslint.config.ts file.
  '**/prettier.config.{js,mjs,cjs,cts}',
  '**/commitlint.config.{js,mjs,cjs,cts}',
];
