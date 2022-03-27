import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from '../data.json';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
	const renderItem = ({ item }: any) => {
		return (
			<View>
				<Text>{`${item.name} - ${item.difficulty}`}</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={item => item.slug}
				renderItem={renderItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	}
});
