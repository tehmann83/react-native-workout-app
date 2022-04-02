import { Entypo, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="WorkoutDetail"
				component={WorkoutDetailScreen}
				options={{ title: 'Workout Details' }}
			/>
		</Stack.Navigator>
	);
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator initialRouteName="Home">
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: props => (
						<FontAwesome name="home" size={props.size} color={props.color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="Planner"
				component={PlannerScreen}
				options={{
					tabBarIcon: props => (
						<Entypo name="add-to-list" size={props.size} color={props.color} />
					),
					unmountOnBlur: true
				}}
			/>
		</BottomTab.Navigator>
	);
}
