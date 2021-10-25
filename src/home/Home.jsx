import React from 'react';

import { messageService, getContactsList } from '../_services';

function Home() {
    function refreshList() {
        getContactsList();
    }

    function clearList() {
        messageService.clearList();
    }

    function addContact() {
        messageService.addContact();
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