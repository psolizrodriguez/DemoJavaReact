import React from 'react';
import {Home} from '../Home';
import renderer from 'react-test-renderer';
import axios from "axios";

jest.mock("axios");

describe('Test for Home component', () => {
    let element;
    beforeEach(() => {
        element = renderer.create(<Home/>);
    });
    test('renders without crashing', () => {
        expect(element).not.toBeNull();
    });
});
