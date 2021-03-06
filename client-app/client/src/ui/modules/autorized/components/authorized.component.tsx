import * as React from 'react';
import { PureComponent, Fragment } from 'react';
import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { Route } from '../../../../ui-kit/containers/route/route.container';
import { routes } from '../../routes';
import { Home } from '../../home/components/home/home.component';
import { CreateContainer } from '../../create/containers/create/create.container';
import { Widget } from '../../widget/components/widget/widget.component';

export const Autorized = combineContext(
	Route,
	Home,
	CreateContainer,
	Widget,
	ask(),
	(Route, Home, CreateContainer, Widget) =>
		class AutorizedComponent extends PureComponent {
			render() {
				return (
					<Fragment>
						<Route match={routes.root} render={this.renderHome} />
						<Route match={routes.create.root} render={this.renderCreateWidget} />
						<Route match={routes.widget.root} render={this.renderWidget} />
					</Fragment>
				);
			}

			renderHome = () => <Home />;
			renderCreateWidget = () => <CreateContainer />;
			renderWidget = () => <Widget />;
		},
);
