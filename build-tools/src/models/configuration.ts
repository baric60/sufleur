import { Configuration as WebpackConfiguration, Options, Entry, Output, Module, Resolve, Plugin } from 'webpack';

export interface Configuration extends WebpackConfiguration {
	mode: 'development' | 'production';

	devtool: Options.Devtool;

	entry: Entry;

	output: Output;

	module: Module;

	resolve: Resolve;

	plugins: Plugin[];
}
