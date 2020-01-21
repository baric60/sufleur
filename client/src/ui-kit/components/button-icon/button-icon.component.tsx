import * as React from 'react';
import { PureComponent, ComponentType } from 'react';
import { ButtonProps } from '../button/button.component';
import { withStyled, WithStyledProps } from '../../../ui/utils/with-styled.utils';
import { label } from './theme/button-icon.theme';

export type ButtonIconProps = {
	iconPosition: 'Left' | 'Right';
	Button: ComponentType<ButtonProps>;
	Icon: ComponentType;
};

@withStyled()
export class ButtonIcon extends PureComponent<WithStyledProps<ButtonIconProps>> {
	render() {
		const { Button, Icon, iconPosition, styled, children } = this.props;
		const Label = styled(label)();

		return (
			<Button>
				{iconPosition === 'Left' && <Icon />}
				<Label>{children}</Label>
				{iconPosition === 'Right' && <Icon />}
			</Button>
		);
	}
}
