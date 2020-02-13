import * as React from 'react';
import { FC } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { withStyles } from '../../../../../../../ui-kit/utils/with-styles.utils';
import { CloseIcon } from './assets/icons/close.icon';
import { Button } from '../../../../../../../ui-kit/components/button/button.component';
import { theme } from './theme/close-button.theme';
import { RouterLink } from '../../../../../../../ui-kit/containers/route-link/route-link.container';
import { routes } from '../../../../../routes';

export const CloseButton = combineContext(RouterLink, ask(), RouterLink => {
	const RawCloseButton: FC = props => (
		<RouterLink
			to={routes.root}
			value={{}}
			render={({ href, onNavigate }) => (
				<a href={href} onClick={onNavigate}>
					<Button {...props}>
						<CloseIcon />
					</Button>
				</a>
			)}
		/>
	);

	return withStyles(theme)(RawCloseButton);
});
