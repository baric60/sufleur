export const container = () => `
    padding: 5px;
`;
export const button = () => `
    display: flex;
    align-items: center;
    background: rgb(3 0 163);
    height: 48px;
    border-radius: 16px;
    color: #F8F8F8;
    padding: 14px 18px; 
    font-size: 16px;
    border: 0;
    outline: none;
    
    &:disabled {
        background: rgb(3 0 163 / .5);
    }
`;
