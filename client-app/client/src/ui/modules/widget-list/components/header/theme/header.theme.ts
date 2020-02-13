const container = `
    animation: infinite 120s linear;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid rgba(51, 51, 51, 0.08);
`;

const content = `
    display: flex;  
    align-items: center;
    width: 100%;
    height: 100%;
`;

const title = `
    font-size: 14px;
    line-height: 14px 
    color: #333333;
    width: 408px;
    padding-left: 56px;
`;

const listenings = `
    font-size: 14px;
    line-height: 14px 
    color: #333333;
    width: 180px;
    text-align: right;
`;
const duration = `
    font-size: 14px;
    line-height: 14px 
    color: #333333;
    width: 100px;
    text-align: right;
`;
const created = `
    font-size: 14px;
    line-height: 14px 
    color: #333333;
    text-align: right;
    width: 150px;
`;

export const theme = {
	container,
	content,
	title,
	listenings,
	duration,
	created,
};
