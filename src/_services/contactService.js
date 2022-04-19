import {Subject} from 'rxjs';
import axios from 'axios';

const subject = new Subject();

const contactService = {
    refreshLists: (contactList) => subject.next({
        contactList: contactList,
    }),
    addContact: () => {
        axios.post('http://localhost:8080/contact')
            .then(function (response) {
                const list = response.data;
                contactService.refreshLists(list);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    },
    clearList: () => subject.next({
        contactList: [],
    }),
    onMessage: () => subject.asObservable(),
    getContactsList: () => {
        axios.get('http://localhost:8080/contact')
            .then(function (response) {
                const list = response.data;
                contactService.refreshLists(list);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
};
export default contactService;
