import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
      const loadResourcesAndDataAsync = async () => {
        try {
            await Font.loadAsync({
                "montserrat": require('../assets/fonts/Montserrat-Regular.ttf'),
                "montserrat-bold": require('../assets/fonts/Montserrat-Bold.ttf')
            })
        } catch (error) {
            console.warn(error)
        } finally {
            setIsLoadingComplete(true)
        }
      }

      loadResourcesAndDataAsync()

    }, [isLoadingComplete])
    

    return isLoadingComplete;
}