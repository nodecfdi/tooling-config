// @ts-check
import { getDirname } from '@poppinss/utils';
import { nodecfdiConfig } from '@nodecfdi/eslint-config';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  ...nodecfdiConfig({ experimentalProjectService: getDirname(import.meta.url) }),
]);
