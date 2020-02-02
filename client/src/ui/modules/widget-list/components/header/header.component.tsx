import * as React from 'react';
import { PureComponent } from 'react';
import { theme } from './theme/header.theme';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';

export type HeaderProps = {
	theme: MakeTheme<'container' | 'content' | 'link'>;
};

class RawHeader extends PureComponent<HeaderProps> {
	render() {
		const { theme } = this.props;
		const Container = withStyled(theme.container)();
		const Content = withStyled(theme.content)();
		const Label = withStyled(theme.link)('p');

		return (
			<Container>
				<Content>
					<Label>Title</Label>
					<Label>Listenings</Label>
					<Label>Duration</Label>
					<Label>Created</Label>
				</Content>
			</Container>
		);
	}
}

export const Header = withStyles(theme)(RawHeader);
