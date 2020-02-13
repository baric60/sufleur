import { withObservable } from '../../../../utils/with-observable.utils';
import { App } from '../../components/app/app.component';
import { createHistory } from '../../../../utils/history.utils';
import { map } from 'rxjs/operators';

const history = createHistory();

export const AppContainer = withObservable(App)(() => {
	const state$ = history.state$;
	const path$ = state$.pipe(
		map(state => state.location),
		map(location => location.pathname),
	);

	return {
		defaultProps: {
			path: history.state.location.pathname,
		},
		props: {
			path: path$,
		},
	};
});
