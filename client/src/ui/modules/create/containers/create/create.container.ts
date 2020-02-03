import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { withObservable } from '../../../../utils/with-observable.utils';
import { Create } from '../../components/create/create.component';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

type FormValue = {
	title: string;
	description: string;
};

export const CreateContainer = combineContext(Create, ask(), Create =>
	withObservable(Create)(() => {
		const value = {
			title: '',
			description: '',
		};
		const value$ = new BehaviorSubject<FormValue>(value);
		const isDisabled$ = value$.pipe(map(value => value.title === '' || value.description === ''));
		const onValueChange = (value: FormValue) => value$.next(value);

		return {
			defaultProps: {
				value,
				isDisabled: true,
				onValueChange,
			},
			props: {
				value: value$,
				isDisabled: isDisabled$,
			},
		};
	}),
);
