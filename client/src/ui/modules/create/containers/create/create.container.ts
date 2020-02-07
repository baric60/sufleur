import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { withObservable } from '../../../../utils/with-observable.utils';
import { Create } from '../../components/create/create.component';
import { Subject, BehaviorSubject } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';

type FormValue = {
	title: string;
	description: string;
};

type CreateContext = {
	widget: any;
};

export const CreateContainer = combineContext(Create, ask<CreateContext>(), (Create, context) =>
	withObservable(Create)(() => {
		const widgetModel = context.widget;
		const value = {
			title: '',
			description: '',
		};
		const value$ = new BehaviorSubject<FormValue>(value);
		const isDisabled$ = value$.pipe(map(value => value.title === '' || value.description === ''));
		const onValueChange = (value: FormValue) => value$.next(value);
		const createHandler = new Subject();
		const onCreate = () => createHandler.next();
		const createEffect$ = createHandler.pipe(
			withLatestFrom(value$),
			tap(([_, value]) => widgetModel.createWidget(value.title)),
		);

		return {
			defaultProps: {
				value,
				isDisabled: true,
				onValueChange,
				onCreate,
			},
			props: {
				value: value$,
				isDisabled: isDisabled$,
			},
			effects: createEffect$,
		};
	}),
);
