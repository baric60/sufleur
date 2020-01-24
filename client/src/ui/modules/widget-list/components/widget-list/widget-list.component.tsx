import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled } from '../../../../utils/with-styled.utils';
import { theme } from './theme/widget-list.theme';
import { Header } from '../header/header.component';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';

type RawWidgetListProps = {
	theme: MakeTheme<'container'>;
};

class RawWidgetList extends PureComponent<RawWidgetListProps> {
	render() {
		const { theme, children } = this.props;
		const Container = withStyled(theme.container)();

		return (
			<Container>
				<Header />
				{children}
			</Container>
		);
	}
}

export const WidgetList = withStyles(theme)(RawWidgetList);
