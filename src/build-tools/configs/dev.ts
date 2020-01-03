import * as path from 'path';
import { SRC_PATH, DIST_PATH, BASE_HREF, NODE_MODULES_PATH } from '../env';
const HtmlWebpackPlugin = require('html-webpack-plugin');

export function dev(): any {
	return {
		mode: 'development',

		devtool: 'inline-source-map',

		target: 'web',

		entry: {
			index: path.resolve(SRC_PATH, 'index.tsx'),
		},

		output: {
			path: DIST_PATH,
			filename: '[name].[hash].js',
			pathinfo: true,
			publicPath: BASE_HREF,
		},

		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: [
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
							},
						},
					],
				},
				{
					test: /\.jsx?$/,
					use: 'babel-loader',
					exclude: [NODE_MODULES_PATH],
				},
			],
		},

		resolve: {
			extensions: ['.ts', '.jsx', '.tsx', '.js', 'css', '.styl'],
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
				filename: './index.html',
				inject: 'body',
			}),
		],
	};
}
