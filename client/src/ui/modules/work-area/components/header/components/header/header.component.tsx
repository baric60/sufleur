import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled } from '../../../../../../utils/with-styled.utils';
import { theme } from './theme/header.theme';
import { Logo } from './assets/logo.icon';
import { Profile } from '../profile/components/profile/profile.component';
import { withStyles } from '../../../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../../../ui-kit/utils/theme.utils';

type HeaderProps = {
	theme: MakeTheme<'container' | 'content' | 'logo'>;
};

class RawHeader extends PureComponent<HeaderProps> {
	render() {
		const { theme } = this.props;
		const Container = withStyled(theme.container)();
		const Content = withStyled(theme.content)();
		const LogoLink = withStyled(theme.logo)('a');

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

export const Header = withStyles(theme)(RawHeader);
