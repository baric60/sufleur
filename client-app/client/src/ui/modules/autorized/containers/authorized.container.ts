import { combineContext, ask } from '@devexperts/rx-utils/dist/context.utils';
import { Autorized } from '../components/authorized.component';

export const AuthorizedContainer = combineContext(Autorized, ask(), Autorized => {
	return Autorized;
});
