"use strict"

import axios from 'axios';
import { ORDERSAPIURL } from '../../../env';

export default class Orders {
    
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        try {
            let searchOrdersFields;

            if(this.query !== '') {
                searchOrdersFields = `&search=${this.query}&search_field=order_no`;
            }
            else {
                searchOrdersFields = '';
            }

            const url = ORDERSAPIURL+searchOrdersFields;
            const api = await axios('https://cors-anywhere.herokuapp.com/' + url);
            this.result = api.data.result;
        }
        catch(error) {
            console.log(error);
        }
    }
}