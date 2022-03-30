import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

	return (
		<View style={styles.container}>
			<Text style={styles.header}>{workout?.name}</Text>
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
