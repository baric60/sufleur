import { withObservable } from '../../../../utils/with-observable.utils';
import { App } from '../../components/app/app.component';
import { createHistory, History } from '../../../../utils/history.utils';
import { map } from 'rxjs/operators';
import { ask as askReader, map as mapReader } from 'fp-ts/lib/Reader';
import { ask, combineContext, ContextEnvType } from '@devexperts/rx-utils/dist/context.utils';
import { pipe } from 'fp-ts/lib/pipeable';

type ConnectionContext = {
	readonly history: History;
};

const Connection = combineContext(ask<ConnectionContext>(), () => {
	return history;
});

const UnresolvedContainer = pipe(
	askReader<ContextEnvType<typeof Connection>>(),
	mapReader(e =>
		withObservable(App)(() => {
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
		}),
	),
);

export const AppContainer = UnresolvedContainer({ history: createHistory() });
