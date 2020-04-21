
import { observable, action } from 'mobx'
import { appConfig } from '../dummy/appConfig';
import { contentRef } from '../services/data.service';
import { pushToArray } from '../services/mapping.service';

export default class CONTENT {
    @observable content: any[] = [];
    @observable loading: boolean = false;
    @observable selectedDetail: any = null
    @observable lastVisable: any = null
    @observable loadingMore: boolean = false
    @observable loadingRefresh: boolean = false

    @action
    async fetchContent() {
        this.loading = true
        const docs = await contentRef().get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.content = items
        // console.log('this.content store', this.content)
        this.loading = false
    }

    @action
    async fetchRefreshContent() {
        this.loadingRefresh = true
        const docs = await contentRef().get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.content = items
        this.loadingRefresh = false
    }

    @action
    async fetchMoreContent() {
        // console.log(this.lastVisable)
        // console.log(this.loadingMore)
        if (!this.lastVisable || this.loadingMore) return
        this.loadingMore = true
        const docs = await contentRef(this.lastVisable).get()
        const items = pushToArray(docs)
        if (docs.size === appConfig.size) {
            this.lastVisable = items[items.length - 1]
        } else {
            this.lastVisable = null;
        }
        this.content = this.content.concat(items)
        this.loadingMore = false
    }

    @action
    fetchDetail(item: any) {
        this.selectedDetail = item
    }
}