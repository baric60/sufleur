import * as React from 'react';
import { PureComponent } from 'react';
import { theme } from './theme/color-button.theme';
import { Button, ButtonProps } from '../../../../../../../../../ui-kit/components/button/button.component';
import { withStyles } from '../../../../../../../../../ui-kit/utils/with-styles.utils';

export type ColorButtonProps = {
	theme: ButtonProps['theme'];
	color: string;
};

class RawColorButton extends PureComponent<ColorButtonProps> {
	render() {
		const { theme } = this.props;
		return <Button theme={theme} />;
	}
}

export const ColorButton = withStyles(theme)(RawColorButton);
