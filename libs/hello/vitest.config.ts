import {configDefaults, defineProject} from 'vitest/config';

export default defineProject({
  test: {
    root: import.meta.dirname,
    exclude: [...configDefaults.exclude, '**/coverage/**', '**/dist/**'],
  },
});
