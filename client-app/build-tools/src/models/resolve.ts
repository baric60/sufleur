import { Resolve as WebpackResolve } from 'webpack';

export interface Resolve extends WebpackResolve {
	extensions: string[];
}
