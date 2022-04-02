import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle
} from 'react-native';

export type PressableTextProps = PressableProps & {
	text: string;
	style?: StyleProp<TextStyle>;
};

const PressableText = (props: PressableTextProps) => {
	return (
		<Pressable {...props}>
			<Text style={[props.style, styles.underlined]}>{props.text}</Text>
		</Pressable>
	);
};

export default PressableText;

const styles = StyleSheet.create({
	underlined: {
		textDecorationLine: 'underline'
	}
});
