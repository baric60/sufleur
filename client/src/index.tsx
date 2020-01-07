import * as React from 'react';
import { render } from 'react-dom';
import { ComponentType } from 'react';
import { App } from './ui/modules/app/components/app/app.component';

const root = document.getElementById('root');

const renderApplication = (Component: ComponentType) => {
	const container = <Component />;

	render(container, root);
};

renderApplication(App);
