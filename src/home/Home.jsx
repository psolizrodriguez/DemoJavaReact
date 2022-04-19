import React from 'react';
import contactService from "../_services/contactService";

function Home() {
    function refreshList() {
        contactService.getContactsList();
    }

    function clearList() {
        contactService.clearList();
    }

    function addContact() {
        contactService.addContact();
    }

    return (
        <div>
            <h2>Contacts</h2>
            <button onClick={refreshList} className="btn btn-primary mr-2">Refresh List</button>
            <button onClick={clearList} className="btn btn-primary mr-2">Clear List</button>
            <button onClick={addContact} className="btn btn-secondary">Add Contact</button>
        </div>
    );
}

export { Home };
