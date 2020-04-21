import { observable, action } from "mobx";
import { searchContentRef } from "../services/search.service";
import { pushToArray } from "../services/mapping.service";

export default class SearchContent {
  @observable searchData: any[] = [];
  @observable loading: boolean = false;

  @action
  fetchSearchContent(keyword: string) {
    this.loading = true;
    if (keyword === "") this.searchData = [];
    else {
      searchContentRef(keyword).onSnapshot(doc => {
        this.searchData = pushToArray(doc);
        this.loading = false;
      });
    }
  }
}
