import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import contactService from "../_services/contactService";
import { Home } from '../home';

function App(props) {
    const [list, setList] = useState(props.list || []);

    useEffect(() => {
        // subscribe to home component messages
        const subscription = contactService.onMessage().subscribe(list => {
            if (list.contactList) {
                setList(list.contactList);
            } else {
                setList([]);
            }
        });
        contactService.getContactsList();
        return subscription.unsubscribe;
    }, []);

    return (
        <Router>
            <div className="jumbotron">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <Route exact path="/" component={Home} />
                            <section id="list">
                            <table id="contactTable">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Personal Info</th>
                                    <th>Address</th>
                                </tr>
                                </thead>
                                <tbody id="contactTableBody">
                                    {list.map((contact, index) =>
                                        <tr key={index}>
                                            <td>
                                                <div>{contact.name}</div>
                                                <img className="listPreview" src={'http://localhost:8080/contact/profilePicture/' + contact.contactId}/>
                                            </td>
                                            <td><textarea className="personalData" readOnly={true} value={'Email: ' + contact.email + '\nPhone Number: ' + contact.personalPhoneNumber + '\nCompany: ' + contact.company}/></td>
                                            <td><textarea readOnly={true} value={contact.address.street + " " + contact.address.unit + "\n" + contact.address.city + " " + contact.address.state + ", " + contact.address.zip} /></td>
                                        </tr>)}
                                </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
