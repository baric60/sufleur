import * as React from 'react';
import { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { Input, InputType } from '../input.component';
import { action } from '@storybook/addon-actions';

const onValueChange = action('onValueChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

type InputStoryState = {
	value: string;
};

class InputStory extends Component<{}, InputStoryState> {
	readonly state = {
		value: 'value',
	};

	render() {
		const { value } = this.state;
		const options: InputType[] = ['text', 'password'];

		return (
			<Input
				value={value}
				type={select('type', options, 'text')}
				isDisabled={boolean('isDisabled', false)}
				isReadOnly={boolean('isReadOnly', false)}
				placeholder={text('placeholder', 'placeholder')}
				onValueChange={this.handleValueChange}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		);
	}

	private handleValueChange = (value: string) => {
		this.setState({
			value,
		});
		onValueChange(value);
	};
}

storiesOf('ui-kit.input', module)
	.addDecorator(withKnobs)
	.add('default', () => <InputStory />);
