import * as React from 'react';
import { PureComponent, ChangeEvent } from 'react';
import { withStyles } from '../../utils/with-styles.utils';
import { withStyled } from '../../../ui-kit/utils/with-styled.utils';
import { MakeTheme } from '../../utils/theme.utils';
import { theme } from './theme/textarea.theme';
import { ControlProps } from '../../utils/control.utils';

type RawTextareaProps = ControlProps<string> & {
	placeholder?: string;
	theme: MakeTheme<'container' | 'textarea'>;
};

class RawTextarea extends PureComponent<RawTextareaProps> {
	render() {
		const { value, placeholder, theme } = this.props;
		const Container = withStyled(theme.container)();
		const Textarea = withStyled(theme.textarea)('textarea');

		return (
			<Container>
				<Textarea value={value} placeholder={placeholder} onChange={this.handleValueChange} />
			</Container>
		);
	}

	private handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const { onValueChange } = this.props;

		onValueChange && onValueChange(event.target.value);
	};
}

export const Textarea = withStyles(theme)(RawTextarea);
