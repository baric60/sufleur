import * as inquirer from 'inquirer';
import { Script } from '../models/script';

const prompt = inquirer.createPromptModule();

const choices: Script[] = ['build', 'server'];

type Answer = {
	script: Script;
};

const runScript = (script: Script) => {
	require(require.resolve(`../scripts/${script}`));
};

prompt<Answer>({
	type: 'list',
	name: 'script',
	message: 'What do you want',
	default: 'server',
	choices,
}).then((answer: Answer) => runScript(answer.script));
