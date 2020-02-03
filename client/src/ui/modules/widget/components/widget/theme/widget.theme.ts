const container = `
    width: 100%;
`;

const content = `
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const work = `
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 735px;
    margin: 0 auto;
    padding-top: 28px;
`;

const title = `
    font-family: Vollkorn;
    font-weight: 600;
    font-size: 40px;
    line-height: 56px;
    color: #000000;
    text-align: center;
`;

const description = `
    font-family: Be Vietnam;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #333333;
    text-align: center;
    opacity: 0.7;
    margin-bottom: 55px;
`;

const controls = `
    display: flex;
    justify-content: flex-end;
`;

export const theme = {
	container,
	content,
	work,
	title,
	description,
	controls,
};
