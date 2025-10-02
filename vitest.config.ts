import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {configDefaults, defineConfig} from 'vitest/config';
import {parse} from 'yaml';

const WORKSPACE_FILE = 'pnpm-workspace.yaml';

export default defineConfig({
  test: {
    projects: parse(readFileSync(join(__dirname, WORKSPACE_FILE), 'utf8'))
      .packages,
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
