"use strict"

import axios from 'axios';
import { ORDERSAPIURL } from '../../../env';

export default class Orders {

    async getResult() {
        try {
            const url = ORDERSAPIURL;
            const api = await axios('https://cors-anywhere.herokuapp.com/' + url);
            this.result = api.data.result;
        }
        catch(error) {
            console.log(error);
        }
    }
}