import { observable, action } from "mobx";
import {RelatedcontentRef} from "../services/data.service";
import { pushToArray } from "../services/mapping.service";
export default class RelatedContent {
    @observable relatedContentData: any = [];
    @observable selectAds: any = null;
    @observable loading: boolean = true;
  @action
  async fetchRelatedContent(key:any) {
    console.log('key', key)
    this.loading = true;
    const item: any = await  RelatedcontentRef().where('category.key','==',key).get();
    const docs=pushToArray(item);
    this.relatedContentData = docs.splice(0,5)
    this.loading = false;
  }

}
