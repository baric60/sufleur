import { ask, combineContext } from '@devexperts/rx-utils/dist/context.utils';
import { merge } from 'rxjs';
import { Sink } from '@devexperts/rx-utils/dist/sink.utils';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, map, withLatestFrom } from 'rxjs/operators';

export type Widget = {
	id: string;
	title: string;
	listenings: string;
	duration: string;
	created: Date;
};

export type WidgetModel = {
	widgets: Widget[];
};

export const createWidgetModel = combineContext(ask(), () => {
	const widgets$ = new BehaviorSubject<Widget[]>([]);
	const createHandler = new Subject<string>();
	const createWidget = (title: string) => ({
		id: 'id',
		title,
		listenings: '100,000,000',
		duration: '1:23:52',
		created: new Date(),
	});
	const newWidget = createHandler.pipe(
		map(createWidget),
		withLatestFrom(widgets$),
		map(([widget, widgets]) => [...widgets, widget]),
		tap(value => widgets$.next(value)),
	);

	const effects$ = newWidget;

	return () =>
		new Sink(
			{
				widgets$,
				createWidget: (title: string) => createHandler.next(title),
			},
			effects$,
		);
});
