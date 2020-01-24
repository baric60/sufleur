import { ComponentType } from 'react';
import styled, { StyledComponent, isStyledComponent } from 'styled-components';
import { Option } from 'fp-ts/lib/Option';

type AvailableProps = string | boolean | number | Option<string> | (() => number | string);
type AvailableComponents<P extends object> =
	| keyof JSX.IntrinsicElements
	| ComponentType
	| StyledComponent<ComponentType<P>, {}>;

type NonFunctionPropertyNames<T extends object> = { [K in keyof T]: T[K] extends AvailableProps ? K : never }[keyof T];

export type NonFunctionalTheme<P extends object> = Pick<P, NonFunctionPropertyNames<P>>;

export type withStyled<P extends object = never> = (props: StyledProps<P>) => string;

export type StyledProps<P extends object> = NonFunctionalTheme<P>;

export const withStyled: (
	styles: string,
) => <T extends keyof JSX.IntrinsicElements>(
	Target?: T,
) => ComponentType<JSX.IntrinsicElements[T]> = styles => Target => {
	if (isStyledComponent(Target)) {
		return Target;
	} else {
		return styled(Target || 'div')`
			${styles}
		`;
	}
};
