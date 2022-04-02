import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';
import PressableText from './PressableText';

export type WorkoutFormData = {
	name: string;
};

type WorkoutProps = {
	onSubmit: (form: WorkoutFormData) => void;
};

const WorkoutForm = ({ onSubmit }: WorkoutProps) => {
	const { control, handleSubmit, reset } = useForm();

	return (
		<View style={styles.container}>
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
						placeholder="Workout name"
						placeholderTextColor={'rgba(0,0,0,0.4)'}
					/>
				)}
			/>
			<PressableText
				text="Confirm"
				style={styles.submit}
				onPress={handleSubmit(data => {
					onSubmit(data as WorkoutFormData);
					reset();
				})}
			/>
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
		borderWidth: 1,
		borderRadius: 5,
		borderColor: 'rgba(0,0,0,0.4)',
		height: 45,
		width: 200,
		marginVertical: 8,
		padding: 8
	},
	submit: {
		alignSelf: 'center',
		margin: 8
	}
});
