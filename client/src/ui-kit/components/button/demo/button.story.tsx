import * as React from 'react';
import { FC, memo } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../button.component';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const onClick = action('onClick');
const onDoubleClick = action('onDoubleClick');

const ButtonStory: FC = memo(() => (
	<Button isDisabled={boolean('isDisabled', false)} onClick={onClick} onDoubleClick={onDoubleClick} />
));

storiesOf('ui-kit.Button', module).add('default', () => <ButtonStory />);
