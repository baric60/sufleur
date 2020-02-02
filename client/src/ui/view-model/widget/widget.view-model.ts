import { ask, combineContext } from '@devexperts/rx-utils/dist/context.utils';

export const createWidgetModel = combineContext(ask(), () => {});
