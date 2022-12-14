import React from 'react';
import { View as RNView, TouchableOpacity } from 'react-native';

export function View({
	children,
	flex,
	center,
	backgroundColor,
	row,
	overflow,
	justifyContent,
	alignItems,
	alignSelf,
	borderRadius,
	borderWidth,
	borderBottomWidth,
	borderColor,
	style,
	width,
	height,
	marginVertical,
	marginHorizontal,
	paddingVertical,
	paddingHorizontal,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	paddingBottom,
	paddingTop,
	paddingLeft,
	paddingRight,
	onPress,
	elevation,
	disabled,
	...props
}) {
	const additionalStyle = {
		flex: flex ? 1 : undefined,
		justifyContent: (center && 'center') || justifyContent || undefined,
		alignItems: (center && 'center') || alignItems || undefined,
		flexDirection: row ? 'row' : undefined,
		alignSelf,
		backgroundColor,
		borderRadius,
		borderWidth,
		borderBottomWidth,
		borderColor,
		width,
		height,
		marginVertical,
		marginHorizontal,
		paddingVertical,
		paddingHorizontal,
		marginTop,
		marginBottom,
		marginLeft,
		marginRight,
		paddingBottom,
		paddingTop,
		paddingLeft,
		paddingRight,
		row,
		disabled,
		elevation,
		onPress,
		overflow,
		...style,
	};

	if (onPress) {
		return (
			<TouchableOpacity
				disabled={disabled}
				onPress={onPress}
				style={[additionalStyle, { opacity: disabled && 0.5 }]}
				{...props}>
				{children}
			</TouchableOpacity>
		);
	}

	return (
		<RNView style={additionalStyle} {...props}>
			{children}
		</RNView>
	);
}
