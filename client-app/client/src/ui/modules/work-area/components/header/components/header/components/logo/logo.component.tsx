import * as React from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { Logo } from './assets/logo.icon';
import { RouterLink } from '../../../../../../../../../ui-kit/containers/route-link/route-link.container';
import { routes } from '../../../../../../../routes';

export const LogoLink = combineContext(RouterLink, ask(), RouterLink => {
	return () => (
		<RouterLink
			to={routes.root}
			value={{}}
			render={({ onNavigate, href }) => (
				<a href={href} onClick={onNavigate}>
					<Logo />
				</a>
			)}
		/>
	);
});
