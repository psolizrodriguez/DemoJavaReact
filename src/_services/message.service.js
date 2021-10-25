import {Subject} from 'rxjs';
import axios from 'axios';

const subject = new Subject();

export const messageService = {
    refreshLists: (contactList) => subject.next({
        contactList: contactList,
    }),
    addContact: () => { alert('Adding contact') },
    clearList: () => subject.next({
        contactList: [],
    }),
    onMessage: () => subject.asObservable()
};
export const getContactsList = () => {
    axios.get('http://localhost:8080/contact')
        .then(function (response) {
            const list = response.data;
            messageService.refreshLists(list);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}
