import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled, WithStyledProps } from '../../../../utils/with-styled.utils';
import { container } from './theme/widget-list.theme';
import { Header } from '../header/header.component';

@withStyled()
export class WidgetList extends PureComponent<WithStyledProps> {
	render() {
		const { styled, children } = this.props;
		const Container = styled(container)();

		return (
			<Container>
				<Header />
				{children}
			</Container>
		);
	}
}
