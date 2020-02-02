import * as React from 'react';
import { PureComponent } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { Header } from '../header/header.component';
import { withStyles } from '../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../ui-kit/utils/theme.utils';
import { theme } from './theme/create.theme';
import { TextareaTheme } from './theme/textarea.theme';
import { InputTheme } from './theme/input.theme';
import { Input } from '../../../../../ui-kit/components/input/input.component';
import { Textarea } from '../../../../../ui-kit/components/textarea/textarea.component';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';

type CreateComponentProps = {
	theme: MakeTheme<'container' | 'content' | 'work' | 'Input' | 'Textarea'>;
};

export const Create = combineContext(Header, ask(), Header => {
	class RawCreateComponent extends PureComponent<CreateComponentProps> {
		render() {
			const { theme } = this.props;
			const Container = withStyled(theme.container)();
			const Content = withStyled(theme.content)();
			const WorkArea = withStyled(theme.work)();

			console.log(theme);

			return (
				<Container>
					<Content>
						<Header />
						<WorkArea>
							<Input placeholder="Sufleur title" theme={theme.Input} />
							<Textarea placeholder="Type or paste the text here" theme={theme.Textarea} />
						</WorkArea>
					</Content>
				</Container>
			);
		}
	}

	const mergedTheme = {
		...theme,
		Input: InputTheme,
		Textarea: TextareaTheme,
	};

	return withStyles(mergedTheme)(RawCreateComponent);
});
