import { observable, action } from "mobx";
import {
  removeBookmark,
  setBookmark,
  getBookmark,
  removeAllBookmark
} from "../services/storage.service";
import { Alert } from "react-native";
export default class BOOKMARK {
  @observable progress: boolean = false;
  @observable favoriteDoc: any;
  @observable saveData: boolean = false;

  @action
  async addFavorite(item: any) {
    this.progress = true;
    try {
      await setBookmark(item);
      Alert.alert("Added to your saved items");
      this.progress = false;
    } catch {
      Alert.alert("Failed");
      this.progress = false;
    }
  }
  @action
  async minusFavorite() {
    this.progress = true;
    try {
      await removeAllBookmark().then(() => this.fetchFavorite());
      this.progress = false;
    } catch {
      this.progress = false;
    }
  }

  @action
  async fetchFavorite() {
    this.progress = true;
    const doc: any = await getBookmark();
    this.favoriteDoc = doc;
   
    this.progress = false;
  }
  @action
  async deleteFavorite(key: any) {
    this.progress = true;
    try {
      await removeBookmark(key);
      const doc: any = await getBookmark();
      this.favoriteDoc = doc;
    //   Alert.alert("Delete content");
      this.progress = false;
    } catch {
      Alert.alert("Failed");
      this.progress = false;
    }
  }

  @action
  async fetchSave(key: string) {
    this.progress = true;
    const doc: any = await getBookmark();
    const items = doc ? doc : [];
    var data = await items.filter(function(value: any) {
      const data = value;
      return data.key == key;
    });
    if (data.length !== 0) {
      this.saveData = true;
      this.progress = false;
    } else {
      this.saveData = false;
      this.progress = false;
    }
    this.progress = false;
  }
}