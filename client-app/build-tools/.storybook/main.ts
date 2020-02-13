import { Configuration } from '../src/models/configuration';
import { stories } from './stories';
import { addons } from './addons';

module.exports = {
	stories,
	addons,
	webpackFinal: async (config: Configuration) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
			],
		});
		config.resolve.extensions.push('.ts', '.tsx');

		return config;
	},
};
