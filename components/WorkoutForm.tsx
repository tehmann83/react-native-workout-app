import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export type ExerciseForm = {
	name: string;
	duration: string;
};

type WorkoutProps = {
	onSubmit: (form: ExerciseForm) => void;
};

const WorkoutForm = ({ onSubmit }: WorkoutProps) => {
	const { control } = useForm();

	return (
		<View style={styles.container}>
			<Text>WorkoutForm</Text>
			<View>
				<Controller
					control={control}
					rules={{
						required: true
					}}
					name="name"
					render={({ field: { onChange, value } }) => (
						<TextInput
							onChangeText={onChange}
							value={value}
							style={styles.input}
						/>
					)}
				/>
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
