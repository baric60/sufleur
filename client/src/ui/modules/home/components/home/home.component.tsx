import * as React from 'react';
import { PureComponent, Fragment } from 'react';
import { Header } from '../header/header.component';
import { WorkArea } from '../../../work-area/components/work-area/work-area.component';

export class Home extends PureComponent {
	render() {
		return (
			<WorkArea>
				<Header name={'name'} />
			</WorkArea>
		);
	}
}
