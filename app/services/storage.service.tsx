import AsyncStorage from "@react-native-community/async-storage";
export async function setBookmark(data: any) {
    const { key } = data
    return await AsyncStorage.setItem(`${key}`, JSON.stringify(data))
}

export async function getBookmark() {
    const allKey = await AsyncStorage.getAllKeys()
    const filterKey = allKey.filter(m => (m != 'fcmToken') && (m != 'CN'))
    const allBookmark = await AsyncStorage.multiGet(filterKey)
    const map = allBookmark.map(m => { return { key: m[0], data: m[1] } })
    return map
}

export async function removeBookmark(key: string) {
    await AsyncStorage.removeItem(key)
}

export async function removeAllBookmark() {
    const allKey = await AsyncStorage.getAllKeys()
    const filterKey = allKey.filter(m => (m != 'fcmToken')&& (m != 'CN'))
    await AsyncStorage.multiRemove(filterKey)
}