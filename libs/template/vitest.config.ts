import {defineConfig, mergeConfig} from 'vitest/config';
import baseConfig from '../../vitest.config.js';

export default defineConfig(mergeConfig(baseConfig, {}));
