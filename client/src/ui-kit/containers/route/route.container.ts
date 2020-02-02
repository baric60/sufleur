import { PureComponent, ReactNode, createElement } from 'react';
import { ask } from '@devexperts/rx-utils/dist/context.utils';
import { map } from 'rxjs/operators';
import { Match } from 'fp-ts-routing';
import { withObservable } from '../../../ui/utils/with-observable.utils';
import { RouteComponent } from '../../components/route/route.component';
import { History } from '../../../ui/utils/history.utils';

type RouteContext = {
	readonly history: History;
};

export type RouteProps<A extends object> = {
	match: Match<A>;
	render: (a: A) => ReactNode;
	exact?: true;
	children?: never;
};

export const Route = ask<RouteContext>().map(e => {
	const Intermediate = withObservable(RouteComponent)(() => {
		const state$ = e.history.state$;
		const path$ = state$.pipe(
			map(state => state.location),
			map(location => location.pathname),
		);

		return {
			defaultProps: {
				path: e.history.state.location.pathname,
			},
			props: {
				path: path$,
			},
		};
	});

	return class RouteContainer<A extends object> extends PureComponent<RouteProps<A>> {
		static displayName = `RouteContainer(${Intermediate.displayName})`;

		render() {
			return createElement(Intermediate, this.props as any);
		}
	};
});
