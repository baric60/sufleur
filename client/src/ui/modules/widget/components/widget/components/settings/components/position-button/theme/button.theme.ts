import { PositionButtonProps } from '../position-button.component';

const container = () => `
	padding: 0;
	&:not(:last-child) {
		padding-right: 16px;
	}
`;

const button = (props: PositionButtonProps) => `
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	padding: 10px;
	width: 91px;
	height: 64px;
	background: #FFFFFF;
	border: 2px solid #333333;
	border-radius: 16px;
	transform: matrix(${props.position === 'Left' ? 1 : -1}, 0, 0, 1, 0, 0);
	opacity: ${props.isActive ? 1 : 0.3};
`;

export const ButtonTheme = {
	container,
	button,
};
