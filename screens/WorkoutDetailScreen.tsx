import { FontAwesome } from '@expo/vector-icons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PressableText from '../components/PressableText';
import Modal from '../components/styled/Modal';
import { SequenceItem } from '../types/data';
import WorkoutItem from './../components/WorkoutItem';
import useCountDown from './../hooks/useCountDown';
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
	const [sequence, setSequence] = useState<SequenceItem[]>([]);
	const [trackerIdx, setTrackerIdx] = useState(-1);
	const workout = useWorkoutBySlug(route.params.slug);

	const countDown = useCountDown(
		trackerIdx,
		trackerIdx >= 0 ? sequence[trackerIdx].duration : -1
	);

	useEffect(() => {
		if (!workout) {
			return;
		}

		if (trackerIdx === workout.sequence.length - 1) {
			return;
		}

		if (countDown === 0) {
			addItemToSequence(trackerIdx + 1);
		}
	}, [countDown]);

	const addItemToSequence = (idx: number) => {
		setSequence([...sequence, workout!.sequence[idx]]);
		setTrackerIdx(idx);
	};

	if (!workout) {
		return null;
	}

	const hasReachedEnd =
		sequence.length === workout.sequence.length && countDown === 0;

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
			<View style={styles.centerView}>
				{sequence.length === 0 && (
					<FontAwesome
						name="play-circle-o"
						size={100}
						onPress={() => addItemToSequence(0)}
					/>
				)}
				{sequence.length > 0 && countDown > 0 && (
					<View>
						<Text style={styles.countDownText}>{countDown}</Text>
					</View>
				)}
			</View>
			<View style={styles.centerView}>
				<Text style={styles.countDownText}>
					{sequence.length === 0
						? 'Prepare'
						: !hasReachedEnd
						? sequence[trackerIdx].name
						: 'Great Job!'}
				</Text>
			</View>
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
	},
	centerView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginBottom: 20
	},
	countDownText: {
		fontSize: 55
	}
});
