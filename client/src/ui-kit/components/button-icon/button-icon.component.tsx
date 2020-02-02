import * as React from 'react';
import { PureComponent, ComponentType } from 'react';
import { ButtonProps } from '../button/button.component';
import { withStyled } from '../../../ui-kit/utils/with-styled.utils';
import { theme } from './theme/button-icon.theme';
import { withStyles } from '../../utils/with-styles.utils';
import { PartialKeys } from '../../utils/object.utils';
import { MakeTheme } from '../../utils/theme.utils';

export type IconPosition = 'Left' | 'Right';

export type RawButtonIconProps = {
	iconPosition?: IconPosition;
	Button?: ComponentType<ButtonProps>;
	Icon?: ComponentType;
	isDisabled?: boolean;
	onClick?: () => void;
	theme: MakeTheme<'label'> & MakeTheme<'Button', ButtonProps['theme']>;
};

class RawButtonIcon extends PureComponent<RawButtonIconProps> {
	render() {
		const { Button, Icon, theme, iconPosition, onClick, children } = this.props;
		const Label = withStyled(theme.label)('label');

		return (
			<Button theme={theme.Button} onClick={onClick}>
				{iconPosition === 'Left' && <Icon />}
				<Label>{children}</Label>
				{iconPosition === 'Right' && <Icon />}
			</Button>
		);
	}
}

export type ButtonIconProps = PartialKeys<RawButtonIconProps, 'theme'>;
export const ButtonIcon = withStyles(theme)(RawButtonIcon);
