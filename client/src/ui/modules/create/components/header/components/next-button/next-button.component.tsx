import * as React from 'react';
import { FC } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { theme } from './theme/next-button.theme';
import { ButtonProps, Button } from '../../../../../../../ui-kit/components/button/button.component';
import {
	RawButtonIconProps,
	ButtonIcon,
} from '../../../../../../../ui-kit/components/button-icon/button-icon.component';
import { NextIcon } from './assets/icons/next.icon';
import { withStyles } from '../../../../../../../ui-kit/utils/with-styles.utils';
import { RouterLink } from '../../../../../../../ui-kit/containers/route-link/route-link.container';
import { routes } from '../../../../../routes';

export const NextButton = combineContext(RouterLink, ask(), RouterLink => {
	const RawNextButton: FC<RawButtonIconProps> = props => {
		const { isDisabled, onClick, theme } = props;
		const renderButton: FC<ButtonProps> = props => (
			<Button isDisabled={isDisabled} onClick={onClick} theme={theme.Button} {...props} />
		);

		return (
			<RouterLink
				to={routes.widget.root}
				value={{}}
				render={({ onNavigate, href }) => (
					<a href={href} onClick={onNavigate}>
						<ButtonIcon {...props} Button={renderButton} Icon={NextIcon} iconPosition={'Right'}>
							Next
						</ButtonIcon>
					</a>
				)}
			/>
		);
	};

	return withStyles(theme)(RawNextButton);
});
