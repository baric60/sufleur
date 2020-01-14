import * as React from 'react';
import { PureComponent } from 'react';
import { container, content, link } from './theme/header.theme';
import { WithStyledProps, withStyled } from '../../../../utils/with-styled.utils';

export type HeaderProps = {
	name: string;
};

@withStyled()
export class Header extends PureComponent<WithStyledProps<HeaderProps>> {
	render() {
		const { styled } = this.props;
		const Container = styled(container)();
		const Content = styled(content)();
		const Link = styled(link)('a');

		return (
			<Container>
				<Content>
					<Link>Listenings</Link>
					<Link>Duration</Link>
					<Link>Created</Link>
				</Content>
			</Container>
		);
	}
}
