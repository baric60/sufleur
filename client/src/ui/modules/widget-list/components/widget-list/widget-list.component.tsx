import * as React from 'react';
import { PureComponent } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { theme } from './theme/widget-list.theme';
import { Header } from '../header/header.component';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { Empty } from '../empty/empty.component';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';
import { WidgetItem } from '../item/item.component';

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

export const WidgetList = combineContext(ask(), () => {
	class RawWidgetList extends PureComponent<RawWidgetListProps> {
		render() {
			const { theme } = this.props;
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

			return data.map(this.renderWidget);
		};

		private renderWidget = (widget: Widget) => <WidgetItem data={widget}></WidgetItem>;
	}

	return withStyles(theme)(RawWidgetList);
});
