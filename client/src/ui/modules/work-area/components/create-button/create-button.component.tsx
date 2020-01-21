import * as React from 'react';
import { FC } from 'react';
import { CreateButtonIcon } from './assets/button.icon';
import { Button, ButtonProps } from '../../../../../ui-kit/components/button/button.component';
import { ButtonIcon, ButtonIconProps } from '../../../../../ui-kit/components/button-icon/button-icon.component';

const renderButton: FC<ButtonProps> = () => <Button />;

export const CreateButton: FC = props => (
	<ButtonIcon Button={renderButton} Icon={CreateButtonIcon} iconPosition="Right" {...props}>
		Create New
	</ButtonIcon>
);
