import * as React from 'react';
import { PureComponent, MouseEvent } from 'react';
import { withStyled, WithStyledProps } from '../../../ui/utils/with-styled.utils';
import { container, button } from './theme/button.theme';

export type ButtonProps = {
	isDisabled?: boolean;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	onDoubleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

@withStyled()
export class Button extends PureComponent<WithStyledProps<ButtonProps>> {
	render() {
		const { styled, isDisabled, className, onClick, onDoubleClick, children } = this.props;
		const Container = styled(container)();
		const Button = styled(button)('button');

		return (
			<Container>
				<Button disabled={isDisabled} className={className} onClick={onClick} onDoubleClick={onDoubleClick}>
					{children}
				</Button>
			</Container>
		);
	}
}
