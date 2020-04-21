import { observable, action } from 'mobx'

import { appConfig } from '../dummy/appConfig';
import { ProverdRef } from '../services/data.service';
import { pushToArray } from '../services/mapping.service';

export default class PROVERD {
    @observable proverd: any[] = [];
    @observable loading: boolean = false;
    @observable selectedDetail: any = null
    @observable lastVisable: any = null
    @observable loadingMore: boolean = false
    @observable loadingRefresh: boolean = false

    @action
    async fetchProverd() {
        this.loading = true
        const docs = await ProverdRef().get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.proverd = items
        this.loading = false
    }

    @action
    async fetchRefreshProverd() {
        this.loadingRefresh = true
        const docs = await ProverdRef().get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.proverd = items
        this.loadingRefresh = false
    }

    @action
    async fetchMoreProverd() {
        if (!this.lastVisable || this.loadingMore) return
        this.loadingMore = true
        const docs = await ProverdRef(this.lastVisable).get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.proverd = this.proverd.concat(items)
        this.loadingMore = false
    }

    @action
    fetchDetail(item: any) {
        this.selectedDetail = item
    }
}