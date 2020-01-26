import * as React from 'react';
import { PureComponent } from 'react';
import { theme } from './theme/empty.theme';
import { Button } from '../../../../../ui-kit/components/button/button.component';
import { Link } from '../../../../../ui-kit/components/link/link.component';

import { Bird } from './assets/bird.icon';
import { withStyled } from '../../../../utils/with-styled.utils';

export class Empty extends PureComponent {
	render() {
		const Container = withStyled(theme.container)();
		const Content = withStyled(theme.content)();
		const Title = withStyled(theme.title)('p');
		const Description = withStyled(theme.description)('p');

		return (
			<Container>
				<Content>
					<Bird />
					<Title>It’s too silent here, lets add some voice</Title>
					<Description>Once created, your Sufleurs will show up here.</Description>
					<Link>
						<Button theme={theme.button}>Create</Button>
					</Link>
				</Content>
			</Container>
		);
	}
}
