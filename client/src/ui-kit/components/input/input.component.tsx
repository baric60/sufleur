import * as React from 'react';
import { PureComponent, FocusEvent, ChangeEvent } from 'react';
import { withStyled, WithStyledProps } from '../../../ui/utils/with-styled.utils';
import { container, input } from './theme/input.theme';
import { ControlProps } from '../../utils/control.utils';

export type InputType = 'text' | 'password';

type InputProps = ControlProps<string | undefined> & {
	isDisabled?: boolean;
	isReadOnly?: boolean;
	type?: InputType;
	placeholder?: string;
	name?: string;
	onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

@withStyled()
export class Input extends PureComponent<WithStyledProps<InputProps>> {
	render() {
		const {
			value,
			defaultValue,
			styled,
			isDisabled,
			isReadOnly,
			placeholder,
			name,
			type,
			onFocus,
			onBlur,
			children,
		} = this.props;
		const Container = styled(container)();
		const Input = styled(input)('input');

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
