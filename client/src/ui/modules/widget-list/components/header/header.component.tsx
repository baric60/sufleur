import * as React from 'react';
import { PureComponent } from 'react';
import { container, content, link } from './theme/header.theme';
import { WithStyledProps, withStyled } from '../../../../utils/with-styled.utils';

export type HeaderProps = {};

@withStyled()
export class Header extends PureComponent<WithStyledProps<HeaderProps>> {
	render() {
		const { styled } = this.props;
		const Container = styled(container)();
		const Content = styled(content)();
		const Label = styled(link)('p');

		return (
			<Container>
				<Content>
					<Label>Title</Label>
					<Label>Listenings</Label>
					<Label>Duration</Label>
					<Label>Created</Label>
				</Content>
			</Container>
		);
	}
}
