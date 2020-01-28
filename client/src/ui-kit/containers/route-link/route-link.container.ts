import { withObservable } from '../../../ui/utils/with-observable.utils';
import { RouteLinkComponent } from '../../components/router-link/route-link.component';
import { ask } from '@devexperts/rx-utils/dist/context.utils';
import { History } from '../../../ui/utils/history.utils';

type RouteLinkContainerContext = {
	readonly history: History;
};

export const RouterLink = ask<RouteLinkContainerContext>().map(e =>
	withObservable(RouteLinkComponent)(() => ({
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
	})),
);
