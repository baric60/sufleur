import { ask, combineContext } from '@devexperts/rx-utils/dist/context.utils';
import { of } from 'rxjs';
import { Sink } from '@devexperts/rx-utils/dist/sink.utils';

export type Widget = {
	id: string;
	title: string;
	listenings: string;
	duration: string;
	created: Date;
};

type WidgetModel = {
	widgets: Widget[];
};

export const createWidgetModel = combineContext(ask(), () => {
	const widgets$ = of<WidgetModel[]>();

	return () =>
		new Sink({
			widgets$,
		});
});
