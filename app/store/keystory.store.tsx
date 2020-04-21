import { observable, action } from 'mobx'

import { appConfig } from '../dummy/appConfig';
import { contentByCategoryRef } from '../services/data.service';
import { pushToArray } from '../services/mapping.service';

export default class KEYSTORY {
    @observable keystory: any[] = [];
    @observable loading: boolean = false;
    @observable lastVisable: any = null
    @observable loadingMore: boolean = false
    @observable loadingRefresh: boolean = false

 
    @action
    async fetchKeystory() {
        this.loading = true
        const docs = await contentByCategoryRef( 'GY4MLWVlUyP7D48GyMGx').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.keystory = items
        this.loading = false
        
    }
    @action
    async fetchRefreshKeyStory() {
        this.loadingRefresh = true
        const docs = await contentByCategoryRef('GY4MLWVlUyP7D48GyMGx').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.keystory = items
        this.loadingRefresh = false
    }

    @action
    async fetchMoreKeyStory() {
        
        if (!this.lastVisable || this.loadingMore) return
        this.loadingMore = true
        const docs = await contentByCategoryRef('GY4MLWVlUyP7D48GyMGx',this.lastVisable).get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.keystory = this.keystory.concat(items)
        this.loadingMore = false
    }


}