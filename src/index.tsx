import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ComponentType } from 'react';
import { App } from './ui/modules/app/components/app.component';

const root = document.getElementById('root');

const render = (Component: ComponentType) => {
	let container = <Component />;

	ReactDOM.render(container, root);
};

render(App);
