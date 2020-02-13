import { argv } from './env';
import { Script } from './models/script';

const script: Script = argv['script'];

const runScript = (script: Script) => {
	require(require.resolve(`./scripts/${script}`));
};

switch (script) {
	case 'build':
	case 'server':
	case 'start':
		runScript(script);
		break;
	default:
		break;
}
