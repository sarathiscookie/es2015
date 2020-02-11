import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

const controlSearch = async () => {

    // 1: Get query from view. 
    const query = searchView.getInput();

    if(query) {
        // 2: New search object and add to state. 
        state.search = new Search(query);

        // 3: Prepare UI for results
        searchView.clearInput(); // Clear search input.
    
        searchView.clearResults(); // Clear search results.

        renderLoader(elements.searchResult); // Loader rendering

        // 4: Search for recipes
        await state.search.getResult();

        clearLoader(); 
        // 5: Render results on UI
        searchView.renderResults(state.search.result); // state.search.result: this.result from model/Search.js
    }

};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
