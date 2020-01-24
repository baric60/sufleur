import * as React from 'react';
import { PureComponent, FocusEvent, ChangeEvent } from 'react';
import { withStyled } from '../../../ui/utils/with-styled.utils';
import { theme } from './theme/input.theme';
import { ControlProps } from '../../utils/control.utils';
import { withStyles } from '../../utils/with-styles.utils';
import { MakeTheme } from '../../utils/theme.utils';

export type InputType = 'text' | 'password';

type RawInputProps = ControlProps<string | undefined> & {
	isDisabled?: boolean;
	isReadOnly?: boolean;
	type?: InputType;
	placeholder?: string;
	name?: string;
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
	theme: MakeTheme<'container' | 'input'>;
};

class RawInput extends PureComponent<RawInputProps> {
	render() {
		const {
			value,
			defaultValue,
			theme,
			isDisabled,
			isReadOnly,
			placeholder,
			name,
			type,
			onFocus,
			onBlur,
			children,
		} = this.props;
		const Container = withStyled(theme.container)();
		const Input = withStyled(theme.input)('input');

		return (
			<Container>
				<Input
					value={value}
					defaultValue={defaultValue}
					type={type}
					disabled={isDisabled}
					placeholder={placeholder}
					name={name}
					readOnly={isReadOnly}
					onChange={this.handleChange}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
				{children}
			</Container>
		);
	}

	private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { onValueChange } = this.props;
		onValueChange(event.target.value);
	};
}

export const Input = withStyles(theme)(RawInput);
