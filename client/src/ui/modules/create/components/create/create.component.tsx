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
import { ControlProps } from '../../../../../ui-kit/utils/control.utils';

type FormValue = {
	title: string;
	description: string;
};

type CreateComponentProps = ControlProps<FormValue> & {
	isDisabled: boolean;
	theme: MakeTheme<'container' | 'content' | 'work' | 'Input' | 'Textarea'>;
};

export const Create = combineContext(Header, ask(), Header => {
	class RawCreateComponent extends PureComponent<CreateComponentProps> {
		render() {
			const { value, theme, isDisabled } = this.props;
			const Container = withStyled(theme.container)();
			const Content = withStyled(theme.content)();
			const WorkArea = withStyled(theme.work)();

			return (
				<Container>
					<Content>
						<Header isDisabled={isDisabled} />
						<WorkArea>
							<Input
								value={value.title}
								placeholder="Sufleur title"
								theme={theme.Input}
								onValueChange={this.handleTitleChange}
							/>
							<Textarea
								value={value.description}
								placeholder="Type or paste the text here"
								theme={theme.Textarea}
								onValueChange={this.handleDescriptionChange}
							/>
						</WorkArea>
					</Content>
				</Container>
			);
		}

		private handleTitleChange = (title: string) => {
			const { value, onValueChange } = this.props;
			onValueChange &&
				onValueChange({
					...value,
					title,
				});
		};

		private handleDescriptionChange = (description: string) => {
			const { value, onValueChange } = this.props;
			onValueChange &&
				onValueChange({
					...value,
					description,
				});
		};
	}

	const mergedTheme = {
		...theme,
		Input: InputTheme,
		Textarea: TextareaTheme,
	};

	return withStyles(mergedTheme)(RawCreateComponent);
});
