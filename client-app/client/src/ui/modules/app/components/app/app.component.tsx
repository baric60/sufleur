import * as React from 'react';
import { PureComponent, Fragment } from 'react';
import { Route } from '../../../../../ui-kit/containers/route/route.container';
import { routes } from '../../../routes';
import { WidgetContainer } from '../../../widget/containers/widget.container';
import { HomeContainer } from '../../../home/containers/home/home.container';

type AppProps = {
	path: string;
};

export class App extends PureComponent<AppProps> {
	render() {
		const { path } = this.props;

		return (
			<Fragment>
				<Route match={routes.root} path={path} render={this.renderHome} />
				<Route match={routes.widget.root} path={path} render={this.renderWidget} />
			</Fragment>
		);
	}

	private renderHome = () => {
		return <HomeContainer />;
	};

	private renderWidget = () => {
		return <WidgetContainer />;
	};
}
