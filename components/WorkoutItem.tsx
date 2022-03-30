import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Workout } from './../types/data';
import MontserratText from './styled/MontserratText';

export default function WorkoutItem({ item }: { item: Workout }) {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{item.name}</Text>
			<MontserratText>{item.name}</MontserratText>
			<Text style={styles.duration}>{`Duration: ${item.duration}`}</Text>
			<Text style={styles.difficulty}>{`Difficulty: ${item.difficulty}`}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		borderColor: 'rgba(0,0,0,0.1)',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		backgroundColor: '#FFFFFF'
	},
	name: {
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 5
	},
	duration: {
		fontSize: 15
	},
	difficulty: {
		fontSize: 15
	}
});
