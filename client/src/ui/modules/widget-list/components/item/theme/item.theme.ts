const container = `
    width: 100%;
    height: 70px
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px rgba(51, 51, 51, 0.08);
`;

const title = `
    font-size: 18px;
    line-height: 18px 
    color: #333333;
    width: 408px;
    padding-left: 56px;
`;

const listenings = `
    font-size: 18px;
    line-height: 18px 
    color: #333333;
    width: 180px;
    text-align: right;
`;

const duration = `
    font-size: 18px;
    line-height: 18px 
    color: #333333;
    width: 100px;
    text-align: right;
`;

const created = `
    font-size: 18px;
    line-height: 18px 
    color: #333333;
    text-align: right;
    width: 150px;
`;

export const theme = { container, title, listenings, duration, created };
