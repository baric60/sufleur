import * as React from 'react';
import { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from '../link.component';
import { action } from '@storybook/addon-actions';

const handleClick = action('onClick');

const LinkStory: FC = () => (
	<Link href="" onClick={handleClick}>
		Link
	</Link>
);

storiesOf('ui-kit.link', module).add('default', () => <LinkStory />);
