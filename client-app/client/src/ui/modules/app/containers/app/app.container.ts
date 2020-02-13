import { combineContext, deferContext } from '@devexperts/rx-utils/dist/context.utils';
import { AuthorizedContainer } from '../../../autorized/containers/authorized.container';
import { createHistory } from '../../../../utils/history.utils';
import { runOnMount } from '../../../../utils/react.utils';
import { createWidgetModel } from '../../../../view-model/widget/widget.view-model';
import { sequenceTSink } from '@devexperts/rx-utils/dist/sink.utils';

const Connection = combineContext(
	deferContext(AuthorizedContainer, 'widget', 'history'),
	createWidgetModel,
	createHistory,
	(Container, createWidgetModel, createHistory) =>
		sequenceTSink(createWidgetModel()).chain(([widget]) =>
			Container.run({
				widget,
				history: createHistory(),
			}),
		),
);

export const AppContainer = runOnMount(Connection, () => () => ({} as any));
