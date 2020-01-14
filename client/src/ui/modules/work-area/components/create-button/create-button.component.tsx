import * as React from 'react';
import { FC } from 'react';
import { CreateButtonIcon } from './assets/button.icon';
import { Button, ButtonProps } from '../../../../../ui-kit/components/button/button.component';

export const CreateButton: FC<ButtonProps> = props => (
	<Button {...props} Icon={CreateButtonIcon}>
		Create New
	</Button>
);
