import { argv } from './env';
import { Script } from './models/script';

const script: Script = argv['script'];

const requireScript = (script: Script) => {
	require(require.resolve(`./scripts/${script}`));
};

switch (script) {
	case 'build':
	case 'start':
		requireScript(script);
		break;
	default:
		break;
}
