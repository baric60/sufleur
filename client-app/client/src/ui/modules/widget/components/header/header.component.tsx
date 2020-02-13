import * as React from 'react';
import { PureComponent } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';
import { theme } from './theme/header.theme';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { CloseButton } from './components/close-button/close-button.component';

type RawHeaderProps = {
	theme: MakeTheme<'container' | 'content'>;
};

export const Header = combineContext(CloseButton, ask(), CloseButton => {
	class RawHeader extends PureComponent<RawHeaderProps> {
		render() {
			const Container = withStyled(theme.container)();
			const Content = withStyled(theme.content)();

			return (
				<Container>
					<Content>
						<CloseButton />
					</Content>
				</Container>
			);
		}
	}

	return withStyles(theme)(RawHeader);
});
