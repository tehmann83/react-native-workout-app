import data from '../data.json';
import { Workout } from '../types/data';
import { containsKey, getData, removeItem, storeData } from './index';

const KEY_DATA = 'workout-data'

export const getWorkouts =  async (): Promise<Workout[]> => { 
    const workouts = await getData(KEY_DATA);

    return workouts;
 }

export const initWorkouts = async (): Promise<boolean> => {
    const hasWorkouts = await containsKey(KEY_DATA);

    if (!hasWorkouts) {
        await storeData(KEY_DATA, data);
        
        return true;
    }

    return false;
}

export const clearWorkouts = async () => {
    await removeItem(KEY_DATA)
}