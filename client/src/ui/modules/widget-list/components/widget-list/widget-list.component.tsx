import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled } from '../../../../utils/with-styled.utils';
import { theme } from './theme/widget-list.theme';
import { Header } from '../header/header.component';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { Empty } from '../empty/empty.component';

type Widget = {
	id: string;
	title: string;
	listenings: string;
	duration: string;
	created: Date;
};

type RawWidgetListProps = {
	data: Widget[];

	theme: MakeTheme<'container'>;
};

class RawWidgetList extends PureComponent<RawWidgetListProps> {
	render() {
		const { data, theme, children } = this.props;
		const Container = withStyled(theme.container)();

		return (
			<Container>
				<Header />
				{this.renderContent()}
			</Container>
		);
	}

	private renderContent = () => {
		const { data } = this.props;

		if (data.length === 0) {
			return <Empty />;
		}

		return <div />;
	};
}

export const WidgetList = withStyles(theme)(RawWidgetList);
