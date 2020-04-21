import { observable, action } from 'mobx'

import { appConfig } from '../dummy/appConfig';
import { contentByCategoryRef } from '../services/data.service';
import { pushToArray } from '../services/mapping.service';


export default class BEAUTY {
    @observable beauty: any[] = [];
    @observable loading: boolean = false;
    @observable lastVisable: any = null
    @observable loadingMore: boolean = false
    @observable loadingRefresh: boolean = false

    @action
    async fetchBeauty() {
        this.loading = true
        console.log('docs')
        const docs = await contentByCategoryRef('Ig4X4P48mu1fKIEQIwqj').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.beauty = items
        this.loading = false   
    }
    @action
    async fetchRefreshBeauty() {
        this.loadingRefresh = true
        const docs = await contentByCategoryRef('Ig4X4P48mu1fKIEQIwqj').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.beauty = items
        this.loadingRefresh = false
    }

    @action
    async fetchMoreBeauty() {
        // console.log(this.lastVisable)
        // console.log(this.loadingMore)
        if (!this.lastVisable || this.loadingMore) return
        this.loadingMore = true
        const docs = await contentByCategoryRef('Ig4X4P48mu1fKIEQIwqj',this.lastVisable).get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.beauty = this.beauty.concat(items)
        this.loadingMore = false
    }
}