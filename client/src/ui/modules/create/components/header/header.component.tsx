import * as React from 'react';
import { PureComponent } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { theme } from './theme/header.theme';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { PlayButton } from './components/play-button/play-button.component';
import { NextButton } from './components/next-button/next-button.component';
import { CloseButton } from './components/close-button/close-button.component';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';

type RawHeaderProps = {
	isDisabled: boolean;
	theme: MakeTheme<'container' | 'content' | 'audio' | 'controls' | 'separator'>;
};

export const Header = combineContext(CloseButton, NextButton, ask(), (CloseButton, NextButton) => {
	class RawHeader extends PureComponent<RawHeaderProps> {
		render() {
			const { isDisabled, theme } = this.props;
			const Container = withStyled(theme.container)();
			const Audio = withStyled(theme.audio)();
			const Controls = withStyled(theme.controls)();
			const Separator = withStyled(theme.separator)();
			const Content = withStyled(theme.content)();

			return (
				<Container>
					<Content>
						<Audio>
							<PlayButton />
						</Audio>
						<Controls>
							<NextButton isDisabled={isDisabled} />
							<Separator />
							<CloseButton />
						</Controls>
					</Content>
				</Container>
			);
		}
	}

	return withStyles(theme)(RawHeader);
});
