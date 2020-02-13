import * as React from 'react';
import { PureComponent } from 'react';
import { theme } from './theme/header.theme';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';

export type HeaderProps = {};

class RawHeader extends PureComponent<HeaderProps> {
	render() {
		const Container = withStyled(theme.container)();
		const Content = withStyled(theme.content)();
		const Title = withStyled(theme.title)();
		const Listenings = withStyled(theme.listenings)();
		const Duration = withStyled(theme.duration)();
		const Created = withStyled(theme.created)();

		return (
			<Container>
				<Content>
					<Title>Title</Title>
					<Listenings>Listenings</Listenings>
					<Duration>Duration</Duration>
					<Created>Created</Created>
				</Content>
			</Container>
		);
	}
}

export const Header = withStyles(theme)(RawHeader);
