import React from 'react';
import { Text, useColorScheme } from 'react-native';

const ThemeText = (props: Text['props']) => {
	const colorScheme = useColorScheme();
	const color = colorScheme === 'light' ? '#2ecc71' : '#34495e';

	return <Text {...props} style={[props.style, { color }]} />;
};

export default ThemeText;
