import firebase from 'react-native-firebase'
import { appConfig } from '../dummy/appConfig';
import moment from "moment";
const Now: number = Number(moment(new Date()).format(`YYYYMMDD`));
const db = firebase.firestore();
export function searchRef() {

    return db.collection("content")
}
export function categoryRef(){
    return db.collection('category')
}
export function contactRef(){
  return db.collection('contact')
}
export function ContentRef() {
    return db.collection("content");
  }

  export function linkRef(){
    return db.collection('setting')
  }
  export function enviromentUpdateRef() {
    return db.collection("environment");
  }

  export function AdsRef() {
    return db
      .collection("mobile_advertisement")
      .where("expireDateKey", ">=", Now);
  }
  export function RelatedcontentRef() {
    return db
      .collection("content")
    
  }

  export function updatecontentRef() {
    return db.collection("content");
  }
  export function ProverdRef(lastVisable?: any) {
    if (lastVisable) {
        return db.collection("proverd").orderBy("page_key", "DESC").startAfter(lastVisable.page_key).limit(appConfig.size)
    }
    return db.collection("proverd").orderBy("page_key", "DESC").limit(appConfig.size)
}


export function contentRef(lastVisable?: any) {
    if (lastVisable) {
        return db.collection("content").orderBy("page_key", "DESC").startAfter(lastVisable.page_key).limit(appConfig.size)
    }
    return db.collection("content").orderBy("page_key", "DESC").limit(appConfig.size)
}

export function contentByCategoryRef(key: string, lastVisable?: any) {
    if (lastVisable) {
        return db.collection('content').where('category.key', '==', key).orderBy('page_key', 'DESC').startAfter(lastVisable.page_key).limit(appConfig.size)
    }
    return db.collection('content').where('category.key', '==', key).orderBy('page_key', 'DESC').limit(appConfig.size)

}




