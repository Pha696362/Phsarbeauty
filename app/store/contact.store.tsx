import { observable, action } from 'mobx'
import { pushToArray } from '../services/mapping.service';
import { categoryRef, contactRef } from '../services/data.service';

export default class ContactStore {
    @observable contact: any[] = [];
    @observable loading: boolean = false;

    @action
    fetchContact() {
        this.loading = true
        contactRef().get().then(item => {
            this.contact = pushToArray(item);
            // console.log('this.contact :', this.contact);
        //     const docs = pushToArray(item);
        //     this.contact = docs;
        //     this.loading = false
        // 
    })
       


    }

}