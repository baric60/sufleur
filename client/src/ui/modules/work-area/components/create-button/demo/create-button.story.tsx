import * as React from 'react';
import { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { CreateButton } from '../create-button.component';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { IconPosition } from '../../../../../../ui-kit/components/button-icon/button-icon.component';

const onClick = action('onClick');

const CreateButtonStory: FC = () => {
	const options: IconPosition[] = ['Left', 'Right'];
	const iconPosition = select('iconPosition', options, 'Left');
	const isDisabled = boolean('isDisabled', false);

	return <CreateButton iconPosition={iconPosition} isDisabled={isDisabled} onClick={onClick} />;
};

storiesOf('create-button', module)
	.addDecorator(withKnobs)
	.add('default', () => <CreateButtonStory />);
