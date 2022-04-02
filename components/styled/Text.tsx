import React from 'react';
import { Text, useColorScheme } from 'react-native';

const ThemeText = (props: Text['props']) => {
	const colorScheme = useColorScheme();
	const color = colorScheme === 'light' ? '#2ecc71' : '#A3E4D7';

	return <Text {...props} style={[props.style, { color }]} />;
};

export default ThemeText;
