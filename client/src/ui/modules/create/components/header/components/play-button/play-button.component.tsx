import * as React from 'react';
import { FC } from 'react';
import { Button, ButtonProps } from '../../../../../../../ui-kit/components/button/button.component';
import { withStyles } from '../../../../../../../ui-kit/utils/with-styles.utils';
import { PlayIcon } from './assets/icons/play.icon';
import { theme } from './theme/play-button.theme';

const RawPlayButton: FC<ButtonProps> = props => (
	<Button {...props} theme={theme.Button}>
		<PlayIcon />
	</Button>
);

export const PlayButton = withStyles(theme)(RawPlayButton);
