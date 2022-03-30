import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import data from '../data.json';
import { getData, storeData } from '../storage';

const KEY_DATA = 'workout-data'

export default function useCachedResources() {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
      const loadResourcesAndDataAsync = async () => {
        try {
            await storeData(KEY_DATA, data)
            await Font.loadAsync({
                "montserrat": require('../assets/fonts/Montserrat-Regular.ttf'),
                "montserrat-bold": require('../assets/fonts/Montserrat-Bold.ttf')
            })
        } catch (error) {
            console.warn(error)
        } finally {
            const workouts = await getData(KEY_DATA);
            console.log(workouts);
            
            setIsLoadingComplete(true)
        }
      }

      loadResourcesAndDataAsync()

    }, [isLoadingComplete])
    

    return isLoadingComplete;
}