import * as webpack from 'webpack';
import * as chalk from 'chalk';
import { Configuration } from '../models/configuration';

export const build = (configuration: Configuration) => {
	return new Promise<webpack.Stats>((resolve, reject) => {
		webpack(configuration, (error, stats) => {
			if (error) {
				reject(error);
			} else {
				const jsonStats = stats.toJson();

				if (jsonStats.errors.length > 0) {
					return reject(jsonStats.errors[0]);
				}

				resolve(stats);
			}
		});
	})
		.then(stats => console.log(chalk.green(`Webpack: success ${stats}`)))
		.catch((error: Error) => {
			console.log(chalk.red(`Webpack: build failed ${error}`));

			process.exit(1);
		});
};
