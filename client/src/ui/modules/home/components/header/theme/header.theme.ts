import { HeaderProps } from '../header.component';
import { StyledWrapper } from '../../../../../utils/with-styled.utils';

export const container: StyledWrapper<HeaderProps> = props => `
    animation: ${props.name} infinite 120s linear;
    height: 50px;
    widht: 100%;
    padding: 0 56px;
    border-bottom: 1px solid rgba(51, 51, 51, 0.08);
`;

export const content = () => `
    display: flex;  
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const link = () => `
    font-size: 14px;
    font-weight: 600;
    color: #333333;
`;
