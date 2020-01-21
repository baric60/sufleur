import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled, WithStyledProps } from '../../../../utils/with-styled.utils';
import { container, content, control, title, fakeBlock } from './theme/wora-area.theme';
import { Header } from '../header/components/header/header.component';
import { CreateButton } from '../create-button/create-button.component';
import { WidgetList } from '../../../widget-list/components/widget-list/widget-list.component';

type MakeTheme<K extends string, T = string> = { [P in K]?: T };
type WorkAreaProps = {
	theme: MakeTheme<'container' | 'content' | 'control' | 'label' | 'fakeBlock'>;
};

@withStyled()
export class WorkArea extends PureComponent<WithStyledProps<WorkAreaProps>> {
	render() {
		const { styled, children } = this.props;
		const Container = styled(container)();
		const Content = styled(content)();
		const Control = styled(control)();
		const Label = styled(title)('p');
		const FakeBlock = styled(fakeBlock)();

		return (
			<Container>
				<Content>
					<Header />
					<Control>
						<FakeBlock />
						<Label>My Sufleurs</Label>
						<CreateButton />
					</Control>
					<WidgetList>{children}</WidgetList>
				</Content>
			</Container>
		);
	}
}
