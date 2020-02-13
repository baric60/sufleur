import * as React from 'react';
import { PureComponent, Fragment } from 'react';
import { withStyles } from '../../../../../../../ui-kit/utils/with-styles.utils';
import { withStyled } from '../../../../../../../ui-kit/utils/with-styled.utils';
import { MakeTheme } from '../../../../../../../ui-kit/utils/theme.utils';
import { theme } from './theme/settings.theme';
import { InputTheme } from './theme/input.theme';
import { PositionButton } from './components/position-button/position-button.component';
import { ColorButton } from './components/color-button/color-button.component';
import { Input, InputProps } from '../../../../../../../ui-kit/components/input/input.component';
import { GetWidgetButton } from './components/get-widget-button/get-widget-button.component';
import { Option, some, elem } from 'fp-ts/lib/Option';
import { eqString } from 'fp-ts/lib/Eq';

type RawSettingsProps = {
	theme: MakeTheme<'container' | 'content' | 'title' | 'control' | 'item' | 'removeDescription'> &
		MakeTheme<'Input', InputProps['theme']>;
};

type Position = 'Left' | 'Right';

type SettingsState = {
	position: Option<Position>;
};

class RawSettings extends PureComponent<RawSettingsProps, SettingsState> {
	readonly state: SettingsState = {
		position: some('Left'),
	};

	render() {
		const { theme } = this.props;
		const Container = withStyled(theme.container)();
		const Content = withStyled(theme.content)();
		const Item = withStyled(theme.item)();
		const Control = withStyled(theme.control)();
		const Title = withStyled(theme.title)();
		const RemoveDescription = withStyled(theme.removeDescription)('p');

		return (
			<Container>
				<Content>
					<Item>
						<Title>Position</Title>
						<Control>{this.renderPositionButtons()}</Control>
					</Item>
					<Item>
						<Title>Colors</Title>
						<Control>{this.renderColorButtons()}</Control>
					</Item>
					<Item>
						<Title>Text</Title>
						<Control>
							<Input value="Listen" theme={theme.Input} />
						</Control>
						<RemoveDescription>Remove the text to keep only icon.</RemoveDescription>
					</Item>
					<GetWidgetButton />
				</Content>
			</Container>
		);
	}

	private renderPositionButtons = () => {
		const { position } = this.state;
		const isLeftActive = elem(eqString)('Left', position);
		const isRightActive = elem(eqString)('Right', position);

		return (
			<Fragment>
				<PositionButton isActive={isLeftActive} position={'Left'} onClick={this.handleClick('Left')} />
				<PositionButton isActive={isRightActive} position={'Right'} onClick={this.handleClick('Right')} />
			</Fragment>
		);
	};

	private handleClick = (position: Position) => () => {
		this.setState({
			position: some(position),
		});
	};

	private renderColorButtons = () => {
		return (
			<Fragment>
				<ColorButton color="#DBFF00" />
				<ColorButton color="#1E208F" />
			</Fragment>
		);
	};
}

const wTheme = {
	...theme,
	Input: InputTheme,
};

export const Settings = withStyles(wTheme)(RawSettings);
