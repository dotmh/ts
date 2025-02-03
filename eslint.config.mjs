import base from '@dotmh/eslint-config-ts';

export default [
  ...base,
  {
    ignores: ['dist/', '/coverage', 'node_modules/', '**/*.js', '**/*.mjs'],
  },
];
