import * as webpack from 'webpack';
import { host, port } from '../env';
import { dev } from '../configs/dev';
const WDS = require('webpack-dev-server');

const config = dev();
const compiler = webpack(config);

const server = new WDS(compiler, {
	hot: true,
});

server.listen(port, host, (error: Error) => {
	console.log(error);
});
