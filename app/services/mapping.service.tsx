
import { RNFirebase } from "react-native-firebase";

export function nFormatter(num: number, digits: number) {
  var si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
}

export function pushToArray(snapshot: RNFirebase.firestore.QuerySnapshot) {
  if (snapshot.empty) return [];
  return snapshot.docs.map(m => ({ id: m.id, ...m.data() }));
}

export function pushToObject(snapshot: RNFirebase.firestore.DocumentSnapshot) {
  if (!snapshot.exists) return null;
  return { ...snapshot.data(), id: snapshot.id }
}

export function toArray(value: any) {
  if (value === undefined || value === null) {
    return [];
  }
  return value;
}

export function fieldArrayValue(data: any, key: any) {
  if (toArray(data).length === 0) {
    return [key];
  }
  else {
    return null;
  }
}

export function userObject(user: any) {
  const { uid, displayName, email, isAnonymous, emailVerified, metadata, phoneNumber, photoURL } = user;
  return {
    key: uid, uid, displayName, email, isAnonymous, emailVerified, metadata, phoneNumber, photoURL
  }
}

export function toLookUp(val: any) {
  return val.replace(/\s+/g, '').toLowerCase().trim();
}

export function removeHtmlTag(text: string) {
  const newtext = text.replace(/<[^>]*>/g, "")
  return newtext
}

export function addAdsInArray(content: any, ads: any, alternate: any) {
  const items = content.reduce((acc: any, curr: any, i: any) => {
    if ((i) % (alternate-1) === 0) {
      const adIndex = Math.floor(i ) % content.length;
      return[...acc, { ...content[adIndex], isBig: true }];
    }
    return [...acc, curr];
  }, []);

  const data = items.reduce((acc: any, curr: any, i: any) => {
    if ((i + 1) % (alternate-1) === 0) {
      const adIndex = Math.floor(i / (alternate-1)) % ads.length;
      return [...acc, curr, { ...ads[adIndex], isAdd: true }];
    }
    return [...acc, curr];
  }, []);
  return data;
}