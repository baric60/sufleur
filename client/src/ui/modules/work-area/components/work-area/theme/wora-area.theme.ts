const container = `
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    background: #F8F8F8;
`;

const content = `
    width: 100%;
    max-width: 950px;
`;

const control = `
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 20px;
`;

const title = `
    font-family: Vollkorn;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #333333;
`;

const fakeBlock = `
    width: 169px;
`;

export const theme = {
	container,
	content,
	control,
	title,
	fakeBlock,
};
