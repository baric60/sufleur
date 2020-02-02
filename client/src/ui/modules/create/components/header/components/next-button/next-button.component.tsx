import * as React from 'react';
import { FC } from 'react';
import { theme } from './theme/next-button.theme';
import { ButtonProps, Button } from '../../../../../../../ui-kit/components/button/button.component';
import {
	RawButtonIconProps,
	ButtonIcon,
} from '../../../../../../../ui-kit/components/button-icon/button-icon.component';
import { NextIcon } from './assets/icons/next.icon';
import { withStyles } from '../../../../../../../ui-kit/utils/with-styles.utils';

const RawNextButton: FC<RawButtonIconProps> = props => {
	const { isDisabled, onClick, theme } = props;
	const renderButton: FC<ButtonProps> = props => (
		<Button isDisabled={isDisabled} onClick={onClick} theme={theme.Button} {...props} />
	);

	return (
		<ButtonIcon {...props} Button={renderButton} Icon={NextIcon} iconPosition={'Right'}>
			Next
		</ButtonIcon>
	);
};
export const NextButton = withStyles(theme)(RawNextButton);
