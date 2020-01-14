import { withObservable } from '../../../../utils/with-observable.utils';
import { Home } from '../../components/home/home.component';

export const HomeContainer = withObservable(Home)(() => ({}));
