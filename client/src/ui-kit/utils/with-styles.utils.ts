import { ComponentType, PureComponent, createElement } from 'react';
import { Properties } from 'csstype';
import { CSSObject } from 'styled-components';

type TStyle = Properties<string | number>[keyof Properties<string | number>];

type FunctionalTheme<P extends object> = {
	[key: string]: FunctionalTheme<P> | TStyle | Function;
};

type WithFunctionalTheme<P extends object> = P & {
	theme?: FunctionalTheme<P>;
};

export const withStyles = <P extends object>(originalTheme: FunctionalTheme<P>) => (
	Target: ComponentType<WithFunctionalTheme<P>>,
): ComponentType<WithFunctionalTheme<P>> => {
	return class WithStyles extends PureComponent<WithFunctionalTheme<P>> {
		static displayName = `WithStyles(${Target.displayName || Target.name} )`;

		render() {
			const { theme, ...rest } = this.props;
			const props = {
				...rest,
				theme: mergeThemes<P>(this.props, originalTheme, theme || {}),
			};
			return createElement(Target, props as any);
		}
	};
};

const mergeThemes = <P extends object>(props: P, ...themes: FunctionalTheme<P>[]): CSSObject => {
	return themes.reduce(
		(acc: CSSObject, theme: FunctionalTheme<P>) => mergeTwoThemes(props, acc, theme),
		{} as CSSObject,
	) as CSSObject;
};

const mergeTwoThemes = <P extends object>(
	props: P,
	original: CSSObject = {},
	theme: FunctionalTheme<P> = {},
): CSSObject => {
	const result = Object.keys(original).reduce(
		(acc, key) => Object.assign({}, acc, { [key]: original[key] }),
		{} as CSSObject,
	);

	Object.keys(theme).forEach(key => {
		const originalValue = result[key];
		const value = theme[key];

		switch (typeof value) {
			case 'object':
				switch (typeof originalValue) {
					case 'string':
					case 'number': {
						result[key] = mergeThemes(props, theme);
						break;
					}
					case 'object': {
						result[key] = mergeThemes(props, originalValue, value);
						break;
					}
				}
				break;
			case 'string':
			case 'number':
				switch (typeof originalValue) {
					case 'string':
					case 'number':
						result[key] = `${originalValue} ${value}`;
						break;
					default:
						result[key] = value;
						break;
				}
				break;
			case 'function':
				result[key] = value(props);
				break;
		}
	});

	return result;
};
