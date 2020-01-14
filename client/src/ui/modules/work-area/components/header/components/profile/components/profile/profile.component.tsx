import * as React from 'react';
import { PureComponent } from 'react';
import { withStyled, WithStyledProps } from '../../../../../../../../utils/with-styled.utils';
import { button } from './theme/profile.theme';

type ProfileProps = {};

@withStyled()
export class Profile extends PureComponent<WithStyledProps<ProfileProps>> {
	render() {
		const { styled } = this.props;
		const Button = styled(button)();
		return <Button>C</Button>;
	}
}
