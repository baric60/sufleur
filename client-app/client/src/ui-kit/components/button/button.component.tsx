import * as React from 'react';
import { PureComponent, MouseEvent } from 'react';
import { withStyled } from '../../../ui/utils/with-styled.utils';
import { theme } from './theme/button.theme';
import { withStyles } from '../../utils/with-styles.utils';
import { PartialKeys } from '../../utils/object.utils';
import { MakeTheme } from '../../utils/theme.utils';

type RawButtonProps = {
	isDisabled?: boolean;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	onDoubleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	theme: MakeTheme<'container' | 'button'>;
};

class RawButton extends PureComponent<RawButtonProps> {
	render() {
		const { theme, isDisabled, className, onClick, onDoubleClick, children } = this.props;
		const Container = withStyled(theme.container)();
		const Button = withStyled(theme.button)('button');

		return (
			<Container>
				<Button disabled={isDisabled} className={className} onClick={onClick} onDoubleClick={onDoubleClick}>
					{children}
				</Button>
			</Container>
		);
	}
}
export type ButtonProps = PartialKeys<RawButtonProps, 'theme'>;
export const Button = withStyles(theme)(RawButton);
