import { sync } from 'glob';
export const stories = sync('**/*.story.tsx', {
	cwd: '..',
	ignore: ['node_modules'],
	nosort: true,
});
