import React from 'react';
import App from '../App';
import TestRenderer  from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure, mount} from 'enzyme';

configure({adapter: new Adapter()});

let contactsList = [{
    "contactId": 1,
    "name": "Shion",
    "company": "Sanctuary",
    "profileImage": null,
    "email": "shion@sanctuary.com",
    "birthdate": 631411200000,
    "personalPhoneNumber": "312312312",
    "workPhoneNumber": "",
    "address": {
        "addressId": 1,
        "street": "Street 1",
        "unit": "1",
        "city": "Athens",
        "state": "AZ",
        "zip": "10230"
    }
}];

describe('Test for App component', () => {
    let element;
    test('renders without crashing', async () => {
        element = await shallow(<App list={contactsList}/>);
        expect(element).not.toBeNull();
    });
    test('renders personal data section properly', async () => {
        element = await shallow(<App list={contactsList}/>);
        expect(element).not.toBeNull();
        const listContacts = element.find('#contactTableBody');
        const tr = listContacts.find('tr');
        expect(tr.length).toBe(1);
        const text = tr.find('.personalData');
        const result = "Email: " + contactsList[0].email + "\n" +
            "Phone Number: " + contactsList[0].personalPhoneNumber + "\n" +
            "Company: " + contactsList[0].company;
        expect(text.prop("value")).toBe(result);
    });
});
