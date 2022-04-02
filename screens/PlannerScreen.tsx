import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import slugify from 'slugify';
import PressableText from '../components/PressableText';
import WorkoutForm, { WorkoutFormData } from '../components/WorkoutForm';
import { SequenceItem, SequenceType } from '../types/data';
import ExerciseItem from './../components/ExerciseItem';

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
	const [seqItems, setSeqItems] = useState<SequenceItem[]>([]);

	const handleFormSubmit = (form: WorkoutFormData) => {
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
			<WorkoutForm onSubmit={handleFormSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	}
});
