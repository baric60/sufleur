import * as React from 'react';
import { render } from 'react-dom';
import { ComponentType, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import RedBox from 'redbox-react';
import { AppContainer } from './ui/modules/app/containers/app/app.container';
import { styles } from './styles';

const root = document.getElementById('root');

export const GlobalStyle = createGlobalStyle(styles);

const renderComponent = (Target: ComponentType<any>) => {
	const Component = (
		<Fragment>
			<GlobalStyle />
			<Target />
		</Fragment>
	);
	try {
		render(Component, root);
	} catch (e) {
		render(<RedBox error={e} />, root);
	}
};

renderComponent(AppContainer);
