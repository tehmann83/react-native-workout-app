import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import data from '../data.json';
import WorkoutItem from './../components/WorkoutItem';
import { Workout } from './../types/data';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Workout</Text>
			<FlatList
				data={data as Workout[]}
				keyExtractor={item => item.slug}
				renderItem={({ item }) => {
					return (
						<Pressable
							onPress={() => {
								navigation.navigate('WorkoutDetail', { slug: item.slug });
							}}
						>
							<WorkoutItem item={item} />
						</Pressable>
					);
				}}
			/>
		</View>
	);
}

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
