import { withObservable } from '../../../ui/utils/with-observable.utils';
import { RouteLinkComponent } from '../../components/router-link/route-link.component';

const rx = withObservable(RouteLinkComponent);

export const RouterLink = rx(() => ({
	defaultProps: {
		onNavigate: options => {
			const { href, action } = options;
			console.log(options);
			switch (action) {
				case 'PUSH': {
					// return e.history.push(href);
				}
				case 'REPLACE': {
					// return e.history.replace(href);
				}
			}
		},
	},
}));
