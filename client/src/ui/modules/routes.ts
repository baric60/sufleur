import { end, lit, Match, Route } from 'fp-ts-routing';
import { Option } from 'fp-ts/lib/Option';

const root = end;
const widget = lit('widget');

export const routes = {
	root,
	widget: {
		root: widget,
	},
};

export const parse = <A extends object>(match: Match<A>, path: string): Option<[A, Route]> =>
	match.parser.run(Route.parse(path));
