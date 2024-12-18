import {configDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, '**/coverage/**', '**/dist/**'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: [
        ...configDefaults.exclude,
        '**/coverage/**',
        '**/dist/**',
        '**/*.d.ts',
      ],
    },
  },
});
