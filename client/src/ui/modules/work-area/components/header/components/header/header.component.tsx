import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled, WithStyledProps } from '../../../../../../utils/with-styled.utils';
import { container, content } from './theme/header.theme';
import { Logo } from './assets/logo.icon';
import { Profile } from '../profile/components/profile/profile.component';
import { Link } from '../../../../../../../ui-kit/components/link/link.component';

type HeaderProps = {};

@withStyled()
export class Header extends PureComponent<WithStyledProps<HeaderProps>> {
	render() {
		const { styled } = this.props;
		const Container = styled(container)();
		const Content = styled(content)();
		const LogoLink = styled(() => '')('a');

		return (
			<Container>
				<Content>
					<LogoLink href="/">
						<Logo />
					</LogoLink>
					<Profile />
				</Content>
			</Container>
		);
	}
}
