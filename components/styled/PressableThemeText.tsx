import React from 'react';
import { useColorScheme } from 'react-native';
import PressableText, { PressableTextProps } from '../PressableText';

const PressableThemeText = (props: PressableTextProps) => {
	const colorScheme = useColorScheme();
	const color = colorScheme === 'light' ? '#2ecc71' : '#A3E4D7';

	return <PressableText {...props} style={[props.style, { color }]} />;
};

export default PressableThemeText;
