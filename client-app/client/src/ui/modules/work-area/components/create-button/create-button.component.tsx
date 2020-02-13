import * as React from 'react';
import { FC } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { CreateButtonIcon } from './assets/button.icon';
import { Button, ButtonProps } from '../../../../../ui-kit/components/button/button.component';
import { ButtonIcon, ButtonIconProps } from '../../../../../ui-kit/components/button-icon/button-icon.component';
import { theme } from './theme/create-button.theme';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { RouterLink } from '../../../../../ui-kit/containers/route-link/route-link.container';
import { routes } from '../../../routes';

export const CreateButton = combineContext(RouterLink, ask(), RouterLink => {
	const RawCreateButton: FC<ButtonIconProps> = props => {
		const { isDisabled, onClick } = props;
		const renderButton: FC<ButtonProps> = props => <Button isDisabled={isDisabled} onClick={onClick} {...props} />;
		return (
			<RouterLink
				to={routes.create.root}
				value={{}}
				render={({ href, onNavigate }) => {
					return (
						<a href={href} onClick={onNavigate}>
							<ButtonIcon {...props} Button={renderButton} Icon={CreateButtonIcon} iconPosition={'Right'}>
								Create New
							</ButtonIcon>
						</a>
					);
				}}
			/>
		);
	};

	return withStyles(theme)(RawCreateButton);
});
