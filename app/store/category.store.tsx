import { observable, action } from 'mobx'
import { pushToArray } from '../services/mapping.service';
import { categoryRef } from '../services/data.service';

export default class CATEGORY {
    @observable category: any[] = [];
    @observable loading: boolean = false;

    // @action
    // async  fetchCategory() {
    //     this.loading = true
    //     const data = await categoryRef().get()
    //     this.category = pushToArray(data)
    //     this.loading =false

    // }

    @action
    fetchCategory() {
        this.loading = true
        categoryRef().onSnapshot((item: any) => {
            const data = pushToArray(item)
            this.category = data
        })
        this.loading = false
    }
}