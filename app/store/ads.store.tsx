
import { observable, action } from "mobx";
import { AdsRef} from "../services/data.service";
import { pushToArray } from "../services/mapping.service";
export default class ADS {
  @observable adsDoc: any = [];
  @observable loading: boolean = true;

  @action
  async fetchAds() {
    this.loading = true;
    const item: any = await AdsRef().get();
    this.adsDoc = pushToArray(item);
    this.loading = false;
  }


}
