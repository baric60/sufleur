import { PureComponent, ReactNode, MouseEvent } from 'react';
import { Action } from 'history';

export type RouteLinkNavigateOptions = {
	action: Action;
	href: string;
};

export type RouteLinkComponentProps = {
	href: string;
	render: (props: RouteLinkRenderProps) => ReactNode;
	onNavigate: (options: RouteLinkNavigateOptions) => void;
};

export type RouteLinkRenderProps = {
	onNavigate: (event: MouseEvent) => void;
	href: string;
};

export class RouteLinkComponent extends PureComponent<RouteLinkComponentProps> {
	render() {
		const { render, href } = this.props;

		return render({
			href,
			onNavigate: this.handleNavigate,
		});
	}

	private handleNavigate = (event: MouseEvent) => {
		event.preventDefault();
		const { href, onNavigate } = this.props;
		onNavigate({
			href,
			action: 'PUSH',
		});
	};
}
