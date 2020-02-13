import { ColorButtonProps } from '../color-button.component';

const container = `
    padding: 0;

    &:not(:last-child) {
        margin-right: 15px;
    }
`;

const button = (props: ColorButtonProps) => `
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: 2px solid rgba(51, 51, 51, 0.08);
    background: ${props.color};
`;

export const theme = { container, button };
