import firebase from 'react-native-firebase'
const db = firebase.firestore();
export function searchContentRef(keyword: string) {
    return db
      .collection("content")
      .where("name", ">=", keyword)
      .orderBy("name", "asc")
      .limit(30);
  }