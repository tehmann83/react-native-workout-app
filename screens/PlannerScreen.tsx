import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
	useEffect(() => {
		console.log('Rendering Planner Screen');
	}, []);

	return (
		<View>
			<Text>Planner screen</Text>
			<Button title="Go to home" onPress={() => navigation.navigate('Home')} />
		</View>
	);
}
