//commonjs here

import * as path from 'path';
import * as minimist from 'minimist';

const ROOT = path.join(process.cwd());
export const SRC_PATH = path.resolve(ROOT, 'src');
export const DIST_PATH = path.resolve(ROOT, 'dist');
export const BASE_HREF = './';
export const NODE_MODULES_PATH = /\node_modules/;
export const argv = minimist(process.argv.slice(2));
export const host = argv['host'] || '0.0.0.0';
export const port = argv['port'];
