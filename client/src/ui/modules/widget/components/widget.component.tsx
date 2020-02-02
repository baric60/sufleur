import * as React from 'react';
import { PureComponent } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';

export const Widget = combineContext(
	ask(),
	() =>
		class WidgetComponent extends PureComponent {
			render() {
				return <div>1</div>;
			}
		},
);
