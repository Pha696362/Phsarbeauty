import { observable, action } from "mobx";
import { AdsRef } from "../services/data.service";
import { pushToArray } from "../services/mapping.service";
import { relativeTimeThreshold } from "moment";
export default class Advertisement {

  @observable adsDoc: any = [];
  @observable loading: boolean = true;
  @observable adsBottom: any = [];
  @observable adsBottomContent: any = [];
  @observable adsDetailTop: any = [];
  @observable adsDrawer: any = [];
  @observable adsDetailBototmfix: any = [];
  @observable adsPopUp: any = [];
  @observable adsHeader: any = [];
  @observable ModalAds:any=[];
  @observable selectAds: any = null;

  @action
  async fetchAdvertisement() {
    this.loading = true;
    const item: any = await AdsRef().get();
    const ads = pushToArray(item);
    var bottom: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 8;
    });
    var popUp: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 4;
    });
    var drawer: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 5;
    });
    var detailBototmfix: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 9;
    });
    var listContent: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 2;
    });
    var adsDetailTop: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 7;
    });
    var bottomFix: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 3;
    });
    var headerFix: any = ads.filter(function(value: any) {
      return value.advertiseType.key == 1;
    });
    this.adsPopUp = popUp[0];
    this.ModalAds= popUp[1],
    this.adsDoc = listContent;
    this.adsDetailBototmfix = detailBototmfix[0];
    this.adsDetailTop = adsDetailTop;
    this.adsBottom = bottom;
    this.adsDrawer = drawer;
    this.adsBottomContent = bottomFix[0];
    this.adsHeader = headerFix[0];
    this.loading = false;
  }
  @action
  selectedAds(dataAds: any) {
    this.selectAds = dataAds;
  }

 

}