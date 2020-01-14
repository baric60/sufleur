import * as React from 'react';
import { PureComponent, MouseEvent, ComponentType, Fragment } from 'react';
import { withStyled, WithStyledProps } from '../../../ui/utils/with-styled.utils';
import { container, button, label } from './theme/button.theme';

export type ButtonProps = {
	isDisabled?: boolean;
	className?: string;
	Icon?: ComponentType;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	onDoubleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	iconPosition?: 'Left' | 'Right';
};

@withStyled()
export class Button extends PureComponent<WithStyledProps<ButtonProps>> {
	render() {
		const { styled, isDisabled, className, Icon, iconPosition, onClick, onDoubleClick, children } = this.props;
		const Container = styled(container)();
		const Button = styled(button)('button');
		const Label = styled(label)();

		return (
			<Container>
				<Button disabled={isDisabled} className={className} onClick={onClick} onDoubleClick={onDoubleClick}>
					<Fragment>
						{iconPosition === 'Left' && Icon && this.renderIcon(Icon)}
						<Label>{children}</Label>
						{(iconPosition === 'Right' || !iconPosition) && Icon && this.renderIcon(Icon)}
					</Fragment>
				</Button>
			</Container>
		);
	}

	private renderIcon = (Icon: ComponentType) => <Icon />;
}
