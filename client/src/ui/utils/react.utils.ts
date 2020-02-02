import { ComponentClass, ComponentType, createElement, PureComponent } from 'react';
import { Subscription } from 'rxjs';
import { Sink } from '@devexperts/rx-utils/dist/sink.utils';
import { Context } from '@devexperts/rx-utils/dist/context.utils';
import { Endomorphism, identity } from 'fp-ts/lib/function';
import { createSelector } from 'reselect';

export const runOnMount = <E, P>(
	Target: Context<E, ComponentType<P>>,
	selector: (p: Endomorphism<P>) => (props: P) => E | Sink<E>,
): ComponentClass<P> =>
	class Wrapper extends PureComponent<P> {
		static displayName = `RunOnMount`;

		private subscription: Subscription | undefined;
		private effectSubscription: Subscription | undefined;
		private p: Endomorphism<P> = identity;
		private provide = selector(this.p);
		private e = createSelector(this.p, this.provide);
		private result = createSelector(this.e, e => {
			const result = Target.run(e instanceof Sink ? e.value : e);
			this.disposeSubscription();
			this.subscription = result.sink$.subscribe();
			this.disposeEffectSubscription();
			if (e instanceof Sink) {
				this.effectSubscription = e.sink$.subscribe();
			}
			return result;
		});

		componentWillUnmount() {
			this.disposeSubscription();
			this.disposeEffectSubscription();
		}

		render() {
			return createElement(this.result(this.props).value, this.props);
		}

		private disposeSubscription() {
			if (this.subscription) {
				this.subscription.unsubscribe();
			}
		}

		private disposeEffectSubscription() {
			if (this.effectSubscription) {
				this.effectSubscription.unsubscribe();
			}
		}
	};

export function wrap<T>(value: T, className?: string) {
	return createElement('span', { className }, value);
}
