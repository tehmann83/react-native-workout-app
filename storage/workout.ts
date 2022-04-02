import data from '../data.json';
import { Workout } from '../types/data';
import { containsKey, getData, removeItem, storeData } from './index';

const KEY_DATA = 'workout-data';

export const getWorkouts = async (): Promise<Workout[]> => {
	const workouts = await getData(KEY_DATA);

	return workouts;
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
	const workouts = await getWorkouts();
	const workout = workouts.filter(workout => workout.slug === slug)[0];

	return workout;
};

export const initWorkouts = async (): Promise<boolean> => {
	const hasWorkouts = await containsKey(KEY_DATA);

	if (!hasWorkouts) {
		await storeData(KEY_DATA, data);

		return true;
	}

	return false;
};

export const storeWorkout = async (newWorkout: Workout): Promise<boolean> => {
	const workouts = await getWorkouts();

	await storeData('workout-data', [newWorkout, ...workouts]);

	return true;
};

export const clearWorkouts = async () => {
	await removeItem(KEY_DATA);
};
