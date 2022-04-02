import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PressableText from './PressableText';

export type WorkoutFormData = {
	name: string;
	duration: string;
	reps?: string;
	type: string;
};

type WorkoutProps = {
	onSubmit: (form: WorkoutFormData) => void;
};

const selectionItems = ['Exercise', 'Break', 'Stretch'];

const WorkoutForm = ({ onSubmit }: WorkoutProps) => {
	const { control, handleSubmit, reset } = useForm();
	const [isSelectionOn, setSelectionOn] = useState(false);

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
							placeholder="Exercise (e.g. pushups)"
						/>
					)}
				/>
				<Controller
					control={control}
					rules={{
						required: true
					}}
					name="duration"
					render={({ field: { onChange, value } }) => (
						<TextInput
							onChangeText={onChange}
							value={value}
							style={styles.input}
							placeholder="Duration (sec)"
						/>
					)}
				/>
				<Controller
					control={control}
					rules={{
						required: false
					}}
					name="reps"
					render={({ field: { onChange, value } }) => (
						<TextInput
							onChangeText={onChange}
							value={value}
							style={styles.input}
							placeholder="Repetitions"
						/>
					)}
				/>
				<Controller
					control={control}
					rules={{
						required: true
					}}
					name="type"
					render={({ field: { onChange, value } }) => (
						<View /* style={{ flex: 1 }} */>
							{isSelectionOn ? (
								<View>
									{selectionItems.map(item => (
										<PressableText
											key={item}
											style={styles.selectOption}
											text={item}
											onPressIn={() => {
												setSelectionOn(false);
												onChange(item);
											}}
										/>
									))}
								</View>
							) : (
								<TextInput
									onPressIn={() => setSelectionOn(true)}
									style={styles.input}
									placeholder="Type"
									value={value}
								/>
							)}
						</View>
					)}
				/>
			</View>

			<PressableText
				text="Submit"
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
		marginVertical: 8,
		padding: 8
	},
	selectOption: {
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		marginTop: 8,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#50a9b2'
	}
});
