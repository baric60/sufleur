import * as webpack from 'webpack';
import * as WDS from 'webpack-dev-server';
import * as chalk from 'chalk';
import { host, port } from '../env';
import { dev } from '../configs/dev';

const configuration = dev();
const compiler = webpack(configuration);
const server = new WDS(compiler, {
	hot: true,
	historyApiFallback: true,
	open: true,
});

const log = console.log;

server.listen(port, host, (error: Error) => {
	log(chalk.red(error));
});
