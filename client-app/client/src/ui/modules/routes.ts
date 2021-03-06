import { end, lit, Match, Route, format } from 'fp-ts-routing';
import { Option } from 'fp-ts/lib/Option';

const root = end;
const create = lit('create');
const widget = lit('widget');

export const routes = {
	root,
	create: {
		root: create,
	},
	widget: {
		root: widget,
	},
};

export const parse = <A extends object>(match: Match<A>, path: string): Option<[A, Route]> =>
	match.parser.run(Route.parse(path));
export const href = <A extends object>(match: Match<A>, a: A): string => format(match.formatter, a, true);
