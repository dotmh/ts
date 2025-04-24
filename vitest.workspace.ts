import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {parse} from 'yaml';

const WORKSPACE_FILE = 'pnpm-workspace.yaml';

export default parse(readFileSync(join(__dirname, WORKSPACE_FILE), 'utf8'))
  .packages;
