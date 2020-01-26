import * as React from 'react';
import { FC } from 'react';
import { CreateButtonIcon } from './assets/button.icon';
import { Button, ButtonProps } from '../../../../../ui-kit/components/button/button.component';
import { ButtonIcon, ButtonIconProps } from '../../../../../ui-kit/components/button-icon/button-icon.component';
import { theme } from './theme/create-button.theme';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';

const RawCreateButton: FC<ButtonIconProps> = props => {
	const { isDisabled, onClick, theme } = props;
	const renderButton: FC<ButtonProps> = props => <Button isDisabled={isDisabled} onClick={onClick} {...props} />;
	return (
		<ButtonIcon {...props} Button={renderButton} Icon={CreateButtonIcon} iconPosition={'Right'}>
			Create New
		</ButtonIcon>
	);
};

export const CreateButton = withStyles(theme)(RawCreateButton);
