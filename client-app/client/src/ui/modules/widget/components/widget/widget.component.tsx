import * as React from 'react';
import { PureComponent } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { Header } from '../header/header.component';
import { theme } from './theme/widget.theme';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { Settings } from './components/settings/settings.component';

type RawWidgetProps = {
	theme: MakeTheme<
		'container' | 'content' | 'work' | 'title' | 'description' | 'controls' | 'view' | 'viewSmall' | 'viewBig'
	>;
};

export const Widget = combineContext(Header, ask(), Header => {
	class RawWidgetComponent extends PureComponent<RawWidgetProps> {
		render() {
			const { theme } = this.props;
			const Container = withStyled(theme.container)();
			const Content = withStyled(theme.content)();
			const WorkArea = withStyled(theme.work)();
			const Title = withStyled(theme.title)('p');
			const Description = withStyled(theme.description)('p');
			const Controls = withStyled(theme.controls)();
			const View = withStyled(theme.view)();
			const ViewSmall = withStyled(theme.viewSmall)();
			const ViewBig = withStyled(theme.viewBig)();

			return (
				<Container>
					<Content>
						<Header />
						<WorkArea>
							<Title>Set up widget</Title>
							<Description>
								Adjusting the appearance of the widget to
								<br /> fit the design of your website.
							</Description>
							<Controls>
								<View>
									<ViewSmall />
									<ViewBig />
								</View>
								<Settings />
							</Controls>
						</WorkArea>
					</Content>
				</Container>
			);
		}
	}

	return withStyles(theme)(RawWidgetComponent);
});
