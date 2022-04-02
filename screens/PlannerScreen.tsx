import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import slugify from 'slugify';
import WorkoutForm, { WorkoutFormData } from '../components/WorkoutForm';
import { SequenceItem, SequenceType } from '../types/data';

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
				renderItem={({ item }) => <Text>{item.name}</Text>}
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
