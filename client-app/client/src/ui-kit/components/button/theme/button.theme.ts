const container = `
    padding: 5px;
`;
const button = `
    background: rgb(3 0 163);
    height: 48px;
    border-radius: 16px;
    color: #F8F8F8;
    padding: 0 18px; 
    font-size: 16px;
    border: 0;
    outline: none;
    
    &:disabled {
        background: rgb(3 0 163 / .5);
    }
`;

export const theme = {
	container,
	button,
};
