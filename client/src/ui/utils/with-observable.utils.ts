import { ComponentType, PureComponent, createElement } from 'react';
import { Observable, Subscription, BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';

type Observify<P extends object> = { readonly [K in keyof P]: Observable<P[K]> };

type WithRXSelectorResult<P extends object, D extends Partial<P>> = {
	defaultProps?: D;
	props?: Partial<Observify<P>>;
	effects?: Partial<Observify<unknown>>;
};

export const withObservable = <P extends object>(Target: ComponentType<P>) => <D extends Partial<P>>(
	selector: (props$: Observable<Readonly<P>>) => WithRXSelectorResult<P, D>,
): ComponentType<D> => {
	class WithObservable extends PureComponent<P, Partial<P>> {
		static displayName = `WithObservable(${Target.displayName || Target.name})`;

		private readonly props$ = new BehaviorSubject<P>(this.props);
		private readonly selected = selector(this.props$.asObservable());

		private propsSubscription!: Subscription;
		private effectsSubscription?: Subscription;

		componentDidMount() {
			const { props, effects } = this.selected;

			if (props) {
				const inputs: Observable<Partial<P>>[] = Object.keys(props).map(key =>
					(props as any)[key].pipe(map(value => ({ [key]: value }))),
				);
				const streams$ = merge(...inputs);
				this.propsSubscription = streams$.subscribe(this.setState.bind(this));
			}

			if (effects) {
				this.effectsSubscription = effects.subscribe();
			}
		}

		componentWillReceiveProps(props: P) {
			this.props$.next(props);
		}

		componentWillUnmount() {
			this.propsSubscription && this.propsSubscription.unsubscribe();
			this.effectsSubscription && this.effectsSubscription.unsubscribe();
		}

		render() {
			const props = Object.assign({}, this.selected.defaultProps, this.props, this.state || {});

			return createElement(Target, props);
		}
	}

	return WithObservable as any;
};
