import * as React from 'react';
import { PureComponent } from 'react';
import { Button, ButtonProps } from '../../../../../../../../../ui-kit/components/button/button.component';
import { ButtonTheme } from './theme/button.theme';
import { PositionBox } from './assets/icons/position-box.icon';
import { withStyles } from '../../../../../../../../../ui-kit/utils/with-styles.utils';

export type PositionButtonProps = ButtonProps & {
	position: 'Left' | 'Right';
};

class RawPositionButton extends PureComponent<PositionButtonProps> {
	render() {
		const { theme } = this.props;
		return (
			<Button {...this.props} theme={theme}>
				<PositionBox />
			</Button>
		);
	}
}
const wTheme = {
	...ButtonTheme,
};

export const PositionButton = withStyles(wTheme)(RawPositionButton);
