import * as React from 'react';
import { PureComponent, MouseEvent } from 'react';

type LinkProps = {
	href: string;
	onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export class Link extends PureComponent<LinkProps> {
	render() {
		const { href, children } = this.props;

		return (
			<a href={href} onClick={this.handleClick}>
				{children}
			</a>
		);
	}

	private handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		const { onClick } = this.props;
		e.preventDefault();
		onClick && onClick(e);
	};
}
