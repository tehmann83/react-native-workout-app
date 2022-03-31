import { FontAwesome } from '@expo/vector-icons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PressableText from '../components/PressableText';
import Modal from '../components/styled/Modal';
import WorkoutItem from './../components/WorkoutItem';
import { useWorkoutBySlug } from './../hooks/useWorkoutBySlug';
import { formatSec } from './../utils/time';

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
			<WorkoutItem item={workout} childStyles={{ marginTop: 10 }}>
				<Modal
					activator={({ handleOpen }) => (
						<PressableText onPress={handleOpen} text="Check Sequence" />
					)}
				>
					<View>
						{workout.sequence.map((sItem, index) => (
							<View key={sItem.slug} style={styles.sequenceItem}>
								<Text>{`${sItem.name} | ${sItem.type} | ${formatSec(
									sItem.duration
								)}`}</Text>
								{index < workout.sequence.length - 1 && (
									<FontAwesome name="arrow-down" size={20} />
								)}
							</View>
						))}
					</View>
				</Modal>
			</WorkoutItem>
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
	},
	sequenceItem: {
		alignItems: 'center'
	}
});
