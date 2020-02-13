import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled } from '../../../../utils/with-styled.utils';
import { theme } from './theme/wora-area.theme';
import { Header } from '../header/components/header/header.component';
import { CreateButton } from '../create-button/create-button.component';
import { WidgetList } from '../../../widget-list/components/widget-list/widget-list.component';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';

type WorkAreaProps = {
	theme: MakeTheme<'container' | 'content' | 'control' | 'title' | 'fakeBlock'>;
};

class RawWorkArea extends PureComponent<WorkAreaProps> {
	render() {
		const { theme, children } = this.props;
		const Container = withStyled(theme.container)();
		const Content = withStyled(theme.content)();
		const Control = withStyled(theme.control)();
		const Title = withStyled(theme.title)('p');
		const FakeBlock = withStyled(theme.fakeBlock)();

		return (
			<Container>
				<Content>
					<Header />
					<Control>
						<FakeBlock />
						<Title>My Sufleurs</Title>
						<CreateButton />
					</Control>
					<WidgetList>{children}</WidgetList>
				</Content>
			</Container>
		);
	}
}

export const WorkArea = withStyles(theme)(RawWorkArea);
