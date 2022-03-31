import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PressableText from '../components/PressableText';
import Modal from '../components/styled/Modal';
import { useWorkoutBySlug } from './../hooks/useWorkoutBySlug';

type DetailParams = {
	route: {
		params: {
			slug: string;
		};
	};
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ route }: Navigation) => {
	const workout = useWorkoutBySlug(route.params.slug);

	if (!workout) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>{workout.name}</Text>
			<Modal
				activator={({ handleOpen }) => (
					<PressableText onPress={handleOpen} text="Check Sequence" />
				)}
			>
				<Text>Hello there</Text>
			</Modal>
			<Modal
				activator={({ handleOpen }) => (
					<Button title="Custom Button" onPress={handleOpen} />
				)}
			>
				<Text>123123</Text>
			</Modal>
		</View>
	);
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1
	},
	header: {
		fontSize: 20,
		marginBottom: 20,
		fontWeight: 'bold',
		fontFamily: 'montserrat-bold'
	}
});
