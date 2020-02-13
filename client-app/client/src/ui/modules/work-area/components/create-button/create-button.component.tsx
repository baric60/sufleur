import * as React from 'react';
import { FC } from 'react';
import { CreateButtonIcon } from './assets/button.icon';
import { Button, ButtonProps } from '../../../../../ui-kit/components/button/button.component';
import { ButtonIcon, ButtonIconProps } from '../../../../../ui-kit/components/button-icon/button-icon.component';

export const CreateButton: FC<ButtonIconProps> = props => {
	const { isDisabled, onClick } = props;
	const renderButton: FC<ButtonProps> = props => <Button isDisabled={isDisabled} onClick={onClick} {...props} />;
	return (
		<ButtonIcon {...props} Button={renderButton} Icon={CreateButtonIcon}>
			Create New
		</ButtonIcon>
	);
};
