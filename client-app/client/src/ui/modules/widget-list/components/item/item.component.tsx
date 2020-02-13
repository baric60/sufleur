import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled } from '../../../../../ui-kit/utils/with-styled.utils';
import { theme } from './theme/item.theme';
import { format } from 'date-fns';

type Widget = {
	id: string;
	title: string;
	listenings: string;
	duration: number;
	created: Date;
};

type WidgetItemProps = {
	data: Widget;
};

export class WidgetItem extends PureComponent<WidgetItemProps> {
	render() {
		const { data } = this.props;
		const Container = withStyled(theme.container)();
		const Title = withStyled(theme.title)();
		const Listenings = withStyled(theme.listenings)();
		const Duration = withStyled(theme.duration)();
		const Created = withStyled(theme.created)();
		const time = format(data.created, 'dd MMM, yyyy');

		return (
			<Container>
				<Title>{data.title}</Title>
				<Listenings>{data.listenings}</Listenings>
				<Duration>{data.duration}</Duration>
				<Created>{time}</Created>
			</Container>
		);
	}
}
