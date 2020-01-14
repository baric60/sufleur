import { ComponentType, createElement, PureComponent, DetailedReactHTMLElement, InputHTMLAttributes, FC } from 'react';
import styled, { StyledComponent, isStyledComponent } from 'styled-components';
import { Option } from 'fp-ts/lib/Option';

type AvailableProps = string | boolean | number | Option<string> | (() => number | string);
type AvailableComponents<P extends object> =
	| keyof JSX.IntrinsicElements
	| ComponentType
	| StyledComponent<ComponentType<P>, {}>;

type NonFunctionPropertyNames<T extends object> = { [K in keyof T]: T[K] extends AvailableProps ? K : never }[keyof T];

export type NonFunctionalTheme<P extends object> = Pick<P, NonFunctionPropertyNames<P>>;

export type StyledWrapper<P extends object = never> = (props: StyledProps<P>) => string;

export type StyledProps<P extends object> = NonFunctionalTheme<P>;

export const styledWrapper: <P extends object>(
	props: StyledProps<P>,
) => (
	callback: (props: StyledProps<P>) => string,
) => (target: AvailableComponents<P>) => ComponentType = props => callback => Target => {
	if (isStyledComponent(Target)) {
		return Target;
	} else {
		return styled(Target || 'div')`
			${callback(props)}
		`;
	}
};

export type StyledTransformer<P extends object> = (
	callback: StyledWrapper<P>,
) => <T extends keyof JSX.IntrinsicElements>(Target?: T) => ComponentType<JSX.IntrinsicElements[T]>;

export type WithStyledProps<P extends object = {}> = P & {
	styled?: StyledTransformer<P>;
};

export function withStyled(): <P extends object>(Target: ComponentType<P>) => void {
	return <P extends object>(Target: ComponentType<P>) =>
		class StyledComponent extends PureComponent<WithStyledProps<P>> {
			static displayName = `withStyled(${Target.displayName || Target.name})`;

			private styled = styledWrapper(this.props);

			render() {
				const props = Object.assign({}, { ...this.props, styled: this.styled });
				return createElement(Target, props);
			}
		};
}
