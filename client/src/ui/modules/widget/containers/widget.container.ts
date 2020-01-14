import { withObservable } from '../../../utils/with-observable.utils';
import { Widget } from '../components/widget.component';

export const WidgetContainer = withObservable(Widget)(() => ({}));
