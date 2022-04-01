import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import WorkoutForm, { ExerciseForm } from '../components/WorkoutForm';

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
	const handleFormSubmit = (form: ExerciseForm) => {
		alert(`${form.name} - ${form.duration}`);
	};

	return (
		<View style={styles.container}>
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
