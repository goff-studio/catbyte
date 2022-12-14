import React from 'react';
import { Image as RNImage } from 'react-native';

export function Image({
	source,
	children,
	style,
	width,
	height,
	resizeMode,
	...props
}) {
	return (
		<RNImage
			resizeMode={resizeMode}
			style={{
				...style,
				width,
				height,
			}}
			source={source}
			{...props}>
			{children}
		</RNImage>
	);
}
