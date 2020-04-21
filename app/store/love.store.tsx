import { observable, action } from 'mobx'

import { appConfig } from '../dummy/appConfig';
import { contentByCategoryRef } from '../services/data.service';
import { pushToArray } from '../services/mapping.service';

export default class LOVE {
    @observable love: any[] = [];
    @observable loading: boolean = false;
    @observable lastVisable: any = null
    @observable loadingMore: boolean = false
    @observable loadingRefresh: boolean = false

    @action
    async fetchLove() {
        this.loading = true
        const docs = await contentByCategoryRef( 'IiEneonSJK5FHi4We0Lt').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.love = items
        this.loading = false
        
    }
    @action
    async fetchRefreshLove() {
        this.loadingRefresh = true
        const docs = await contentByCategoryRef( 'IiEneonSJK5FHi4We0Lt').get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.love = items
        this.loadingRefresh = false
    }

    @action
    async fetchMoreLove() {
        // console.log(this.lastVisable)
        // console.log(this.loadingMore)
        if (!this.lastVisable || this.loadingMore) return
        this.loadingMore = true
        const docs = await contentByCategoryRef('IiEneonSJK5FHi4We0Lt',this.lastVisable,).get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.love = this.love.concat(items)
        this.loadingMore = false
    }
}