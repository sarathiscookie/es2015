import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        try {
            // Response is json response. Not need to use .json().
            const api = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`); 
            this.result = api.data.recipes;
            //console.log(this.result);
        }
        catch(error) {
            console.log(error);
        }
    }   
}