import { Configuration as WebpackConfiguration, Options, Entry, Output, Module, Plugin } from 'webpack';
import { Resolve } from './resolve';

export interface Configuration extends WebpackConfiguration {
	mode: 'development' | 'production';

	devtool: Options.Devtool;

	entry: Entry;

	output: Output;

	module: Module;

	resolve: Resolve;

	plugins: Plugin[];
}
