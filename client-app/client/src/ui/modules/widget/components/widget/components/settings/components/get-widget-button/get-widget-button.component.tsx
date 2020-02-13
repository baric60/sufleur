import * as React from 'react';
import { PureComponent } from 'react';
import { ButtonIcon } from '../../../../../../../../../ui-kit/components/button-icon/button-icon.component';
import { Button, ButtonProps } from '../../../../../../../../../ui-kit/components/button/button.component';
import { theme } from './theme/button-icon.theme';
import { GetWidgetIcon } from './assets/icons/get-widget.icon';

type GetWidgetButtonProps = {};

export class GetWidgetButton extends PureComponent<GetWidgetButtonProps> {
	render() {
		return (
			<ButtonIcon Button={this.renderButton} Icon={GetWidgetIcon} iconPosition={'Right'}>
				Get Widget
			</ButtonIcon>
		);
	}

	private renderButton = (props: ButtonProps) => <Button {...props} theme={theme} />;
}
