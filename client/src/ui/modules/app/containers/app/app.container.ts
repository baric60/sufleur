import { ask, combineContext } from '@devexperts/rx-utils/dist/context.utils';
import { AuthorizedContainer } from '../../../autorized/containers/authorized.container';
import { createHistory } from '../../../../utils/history.utils';
import { runOnMount } from '../../../../utils/react.utils';

type ConnectionContext = {
	readonly history: History;
};

const Connection = combineContext(AuthorizedContainer, ask<ConnectionContext>(), Connection => Connection);

export const AppContainer = runOnMount(Connection, () => () => ({ history: createHistory() } as any));
