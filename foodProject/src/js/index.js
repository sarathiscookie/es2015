import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/reipeView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

/**
 * Search Controller
 */
const controlSearch = async () => {

    // 1: Get query from view. 
    const query = searchView.getInput();

    if (query) {
        // 2: New search object and add to state. 
        state.search = new Search(query);

        // 3: Prepare UI for results.
        searchView.clearInput(); // Clear search input.
        searchView.clearResults(); // Clear search results.

        renderLoader(elements.searchResult); // Loader rendering.

        try {
            // 4: Search for recipes
            await state.search.getResult();

            clearLoader(); // Clear the loader.

            // 5: Render results on UI.
            searchView.renderResults(state.search.result);
        }
        catch (err) {
            console.log(err);
            clearLoader(); // Clear the loader.
        }
    }

};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults(); // Clear search results.
        // Passing page no and rendering results on UI.
        searchView.renderResults(state.search.result, goToPage);
    }
});


/**
 * Recipe Controller.
 */
const controlRecipe = async () => {
    // Get ID from URL
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes.
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Create new recipe object.
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingrediants
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time.
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe.
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        }
        catch (err) {
            console.log(err);
        }
    }
}

/* When page load or Hashchange recipe details will render in to view.*/
/* window.addEventListener('hashchange', controlRecipe);
   window.addEventListener('load', controlRecipe); */

// OR

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
