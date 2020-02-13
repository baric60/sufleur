import { PureComponent, createElement } from 'react';
import { withObservable } from '../../../ui/utils/with-observable.utils';
import { RouteLinkComponent, RouteLinkComponentProps } from '../../components/router-link/route-link.component';
import { ask } from '@devexperts/rx-utils/dist/context.utils';
import { History } from '../../../ui/utils/history.utils';
import { Match } from 'fp-ts-routing';
import { href } from '../../../ui/modules/routes';

type RouteLinkContainerContext = {
	readonly history: History;
};

export type RouteLinkContainerProps<A extends object> = RouteLinkComponentProps & {
	to: Match<A>;
	value: A;
};

export const RouterLink = ask<RouteLinkContainerContext>().map(e => {
	const Intermediate = withObservable(RouteLinkComponent)(() => ({
		defaultProps: {
			onNavigate: options => {
				const { href, action } = options;

				switch (action) {
					case 'PUSH': {
						return e.history.push(href);
					}
					case 'REPLACE': {
						return e.history.replace(href);
					}
				}
			},
		},
	}));

	return class RouteLinkContainer<A extends object> extends PureComponent<RouteLinkContainerProps<A>> {
		static displayName = `RouteLinkContainer(${Intermediate.displayName})`;

		render() {
			const { children, to, value, ...props } = this.props;
			const hrefValue = href(to, value);
			return createElement(Intermediate, {
				...props,
				href: hrefValue,
			} as RouteLinkContainerProps<A>);
		}
	};
});
