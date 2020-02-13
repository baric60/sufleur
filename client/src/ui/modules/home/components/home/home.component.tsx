import * as React from 'react';
import { PureComponent } from 'react';
import { WorkArea } from '../../../work-area/components/work-area/work-area.component';
import { ask, combineContext } from '@devexperts/rx-utils/dist/context.utils';

export const Home = combineContext(
	WorkArea,
	ask(),
	WorkArea =>
		class HomeComponent extends PureComponent {
			render() {
				return <WorkArea />;
			}
		},
);
