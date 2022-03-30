import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

const PressableText = (props: PressableProps & { text: string }) => {
	return (
		<Pressable {...props}>
			<Text style={styles.underlined}>{props.text}</Text>
		</Pressable>
	);
};

export default PressableText;

const styles = StyleSheet.create({
	underlined: {
		textDecorationLine: 'underline'
	}
});
