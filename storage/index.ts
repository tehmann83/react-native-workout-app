import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeData = async (key: string, value: any) => {
    try {
        const stringValue = JSON.stringify(value);

        await AsyncStorage.setItem(key, stringValue);
    } catch (error: any) {
        console.error(error.message)
    }
};

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);

        if (value !== null) {
            const data = JSON.parse(value)

            return data;
        }
    } catch (error: any) {
        console.error(error.message)
    }
}