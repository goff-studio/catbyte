import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from './View';
import { theme } from './themeConfig';

export function Screen({
	style,
	backgroundColor,
	unsafe,
	barStyle = 'dark',
	barStyleHidden,
	barBackgroundColor = 'transparent',
	children,
	paddingHorizontal = theme.pads.screenHorizontalPad,
	...props
}) {
	const insets = useSafeAreaInsets();
	const statusBarHeight =
		Platform.OS === 'android' ? StatusBar.currentHeight : 0;
	const insetStyle = {
		paddingTop: unsafe ? 0 : insets.top + statusBarHeight,
	};

	return (
		<View
			paddingHorizontal={paddingHorizontal}
			style={[insetStyle, style]}
			backgroundColor={backgroundColor}
			{...props}>
			<StatusBar
				backgroundColor={barBackgroundColor}
				barStyle={barStyle}
				hidden={barStyleHidden}
			/>
			{children}
		</View>
	);
}
