import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { withObservable } from '../../../../utils/with-observable.utils';
import { WidgetList } from '../../components/widget-list/widget-list.component';

type WidgetListContext = {
	readonly widget: any;
};

export const WidgetListContainer = combineContext(WidgetList, ask<WidgetListContext>(), (WidgetList, context) =>
	withObservable(WidgetList)(() => ({
		defaultProps: {
			data: [],
		},
		props: {
			data: context.widget.widgets$,
		},
	})),
);
