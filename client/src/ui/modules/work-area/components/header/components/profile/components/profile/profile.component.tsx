import * as React from 'react';
import { PureComponent } from 'react';
import { theme } from './theme/profile.theme';
import { withStyles } from '../../../../../../../../../ui-kit/utils/with-styles.utils';
import { MakeTheme } from '../../../../../../../../../ui-kit/utils/theme.utils';
import { withStyled } from '../../../../../../../../../ui-kit/utils/with-styled.utils';

type ProfileProps = {
	theme: MakeTheme<'button'>;
};

class RawProfile extends PureComponent<ProfileProps> {
	render() {
		const { theme } = this.props;
		const Button = withStyled(theme.button)();

		return <Button>C</Button>;
	}
}

export const Profile = withStyles(theme)(RawProfile);
