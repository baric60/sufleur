const container = `
    width: 100%;
    padding-top: 85px;
`;

const content = `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
`;

const title = `
    font-family: Vollkorn;
    font-weight: bold;
    font-size: 24px;
    color: #333333;
    line-height: 28px;
    text-align: center;
    margin: 45px 0 8px;
`;

const description = `
    font-size: 18px;
    color: rgb(51 51 51 / .7);
    margin-bottom: 32px;
    text-align: center;
    line-height: 18px;
    opacity: 0.7;
`;

const button = {
	button: `
        background: #FFFFFF;
        color: rgb(51 51 51 / .5);
        font-weight: bold;
        width: 149px;
        text-align: center;
        border: 2px solid rgb(51 51 51 / .5);
    `,
};
export const theme = {
	container,
	content,
	title,
	description,
	button,
};
