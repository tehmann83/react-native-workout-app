import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import slugify from 'slugify';
import ExerciseForm, { ExerciseFormData } from '../components/ExerciseForm';
import PressableText from '../components/PressableText';
import Modal from '../components/styled/Modal';
import WorkoutForm, { WorkoutFormData } from '../components/WorkoutForm';
import { SequenceItem, SequenceType, Workout } from '../types/data';
import ExerciseItem from './../components/ExerciseItem';

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
	const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

	const handleExerciseSubmit = (form: ExerciseFormData) => {
		const { name, type, duration, reps } = form;

		const sequenceItem: SequenceItem = {
			slug: slugify(`${name} ${Date.now()}`, {
				lower: true,
				replacement: '-'
			}),
			name: name,
			type: type as SequenceType,
			duration: Number(duration)
		};

		if (reps) {
			sequenceItem.reps = Number(reps);
		}

		setSeqItems([...seqItems, sequenceItem]);
	};

	const computeDiff = (exercisesCount: number, workoutDuration: number) => {
		const intensity = workoutDuration / exercisesCount;

		if (intensity <= 60) {
			return 'hard';
		} else if (intensity <= 100) {
			return 'normal';
		} else {
			return 'easy';
		}
	};

	const handleWorkoutSubmit = (form: WorkoutFormData) => {
		const { name } = form;

		if (seqItems.length > 0) {
			const duration = seqItems.reduce((acc, item) => {
				return acc + item.duration;
			}, 0);

			const workout: Workout = {
				name,
				slug: slugify(`${name} ${Date.now()}`, {
					lower: true,
					replacement: '-'
				}),
				difficulty: computeDiff(seqItems.length, duration),
				sequence: [...seqItems],
				duration
			};

			console.log(workout);
		}
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={seqItems}
				keyExtractor={item => item.slug}
				renderItem={({ item, index }) => (
					<ExerciseItem item={item}>
						<PressableText
							text="remove"
							onPressIn={() => {
								const items = [...seqItems];

								items.splice(index, 1);
								setSeqItems(items);
							}}
						/>
						{/* <FontAwesome n */}
					</ExerciseItem>
				)}
			/>
			{/* todo: add show/hide ExerciseForm on icon press
			<FontAwesome
				name="plus"
				size={40}
				color="#50a9b2"
				style={{
					alignSelf: 'center'
				}}
			/> */}
			<ExerciseForm onSubmit={handleExerciseSubmit} />
			<Modal
				activator={({ handleOpen }) => (
					<PressableText
						text="Create Workout"
						onPress={handleOpen}
						style={styles.modalOpener}
					/>
				)}
			>
				{({ handleClose }) => (
					<View>
						<WorkoutForm
							onSubmit={data => {
								handleWorkoutSubmit(data);
								handleClose();
							}}
						/>
					</View>
				)}
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	modalOpener: {
		alignSelf: 'center',
		margin: 8
	}
});
