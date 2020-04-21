import { observable, action } from "mobx";

import { pushToArray, pushToObject } from "../services/mapping.service";
import { enviromentUpdateRef } from "../services/data.service";
export default class VERSIONAPP {
  @observable appVersion: any = null;
  @observable loadingVersion: boolean = true;
  @observable Version: any = null;

  @action
  async fetchAppVersion() {
    this.loadingVersion = true;
    const item: any = await enviromentUpdateRef().get();
    const docs = pushToArray(item);
    this.appVersion = docs[0];
    // console.log('this.appVersion store', this.appVersion)
    this.loadingVersion = false;
   
  }

  @action
  versionFirebase(data: any) {
    this.Version = data;
  }
}