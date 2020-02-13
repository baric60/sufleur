import { createBrowserHistory, Location, Action, Path } from 'history';
import { Observable } from 'rxjs';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';

const initHistory = () =>
	createBrowserHistory({
		basename: '/',
	});

export type RouterState = {
	location: Location;
	action: Action;
};

type HistoryProps<R extends RouterState> = {
	state: R;
	state$: Observable<R>;
	push: (path: Path) => void;
	replace: (path: Path) => void;
};

export type History = HistoryProps<RouterState>;
// : HistoryProps<RouterState>
export const createHistory = combineContext(ask(), () => () => {
	const history = initHistory();
	const { location, action, listen, push, replace } = history;
	const state$ = new Observable<RouterState>(subscriber => {
		listen((location, action) => {
			subscriber.next({
				location,
				action,
			});
		});
	});

	return {
		push,
		replace,
		state: {
			action,
			location,
		},
		state$,
	};
});
