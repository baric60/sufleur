import { PureComponent, ReactNode } from 'react';
import { Match } from 'fp-ts-routing';
import { map, toNullable } from 'fp-ts/lib/Option';
import { parse } from '../../../ui/modules/routes';
import { pipe } from 'fp-ts/lib/pipeable';

export type RouteComponentProps<P> = {
	match: Match<P>;
	path: string;
	render: () => ReactNode;
};

export class RouteComponent<P extends object> extends PureComponent<RouteComponentProps<P>> {
	render() {
		const { match, path, render } = this.props;
		return pipe(parse(match, path), map(render), toNullable);
	}
}
