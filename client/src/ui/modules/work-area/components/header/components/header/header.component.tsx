import * as React from 'react';
import { PureComponent } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { theme } from './theme/header.theme';
import { Profile } from '../profile/components/profile/profile.component';
import { withStyles } from '../../../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../../../ui-kit/utils/theme.utils';
import { LogoLink } from './components/logo/logo.component';
import { withStyled } from '../../../../../../../ui-kit/utils/with-styled.utils';

type HeaderProps = {
	theme: MakeTheme<'container' | 'content' | 'logo'>;
};

export const Header = combineContext(LogoLink, ask(), LogoLink => {
	class RawHeader extends PureComponent<HeaderProps> {
		render() {
			const { theme } = this.props;
			const Container = withStyled(theme.container)();
			const Content = withStyled(theme.content)();

			return (
				<Container>
					<Content>
						<LogoLink />
						<Profile />
					</Content>
				</Container>
			);
		}
	}

	return withStyles(theme)(RawHeader);
});
