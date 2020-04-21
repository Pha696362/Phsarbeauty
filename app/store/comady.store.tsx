import { observable, action } from 'mobx'

import { appConfig } from '../dummy/appConfig';
import { contentByCategoryRef } from '../services/data.service';
import { pushToArray } from '../services/mapping.service';

export default class COMADY {
    @observable comady: any[] = [];
    @observable loading: boolean = false;
    @observable lastVisable: any = null
    @observable loadingMore: boolean = false
    @observable loadingRefresh: boolean = false

    @action
    async fetchComady() {
        this.loading = true
        const docs = await contentByCategoryRef( 'ydIK2eEf8MnWwC7usNGE').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.comady = items
        this.loading = false
        
    }
    @action
    async fetchRefreshComady() {
        this.loadingRefresh = true
        const docs = await contentByCategoryRef( 'ydIK2eEf8MnWwC7usNGE').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.comady = items
        this.loadingRefresh = false
    }

    @action
    async fetchMoreComady() {
        // console.log(this.lastVisable)
        // console.log(this.loadingMore)
        if (!this.lastVisable || this.loadingMore) return
        this.loadingMore = true
        const docs = await contentByCategoryRef('ydIK2eEf8MnWwC7usNGE',this.lastVisable,).get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.comady = this.comady.concat(items)
        this.loadingMore = false
    }

}