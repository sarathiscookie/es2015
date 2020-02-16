import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            // Response is json response. Not need to use .json().
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`); 
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        }
        catch(error) {
            console.log(error);
        }
    }

    /* To take food preparation time. */
    calcTime() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    /* How many persons can have this food. */
    calcServings() {
        this.servings = 4;
    }

}