import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PressableText from './PressableText';

export type ExerciseForm = {
	name: string;
	duration: string;
};

type WorkoutProps = {
	onSubmit: (form: ExerciseForm) => void;
};

const WorkoutForm = ({ onSubmit }: WorkoutProps) => {
	const [form, setForm] = useState({
		name: '',
		duration: ''
	});

	const onChangeText = (formProp: string) => (text: string) => {
		setForm({
			...form,
			[formProp]: text
		});
	};

	return (
		<View style={styles.container}>
			<Text>WorkoutForm</Text>
			<View>
				<TextInput
					style={styles.input}
					value={form.name}
					onChangeText={onChangeText('name')}
				/>
				<TextInput
					style={styles.input}
					value={form.duration}
					onChangeText={onChangeText('duration')}
				/>
				<PressableText text="Submit" onPress={() => onSubmit(form)} />
			</View>
		</View>
	);
};

export default WorkoutForm;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		padding: 10
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10
	}
});
