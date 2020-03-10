export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResult: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    shopping: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')
};

export const elementStrings = {
    loader: 'loader'
};

/* Loader render */
// parent: <div class="results"> </div>
export const renderLoader = parent => {
    const loader = `
       <div class="${elementStrings.loader}">
       <svg>
       <use href="img/icons.svg#icon-cw"></use>
       </svg>
       </div>`;

    parent.insertAdjacentHTML('afterbegin', loader);   
};

/* Remove Loader */
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader); // parentElement: <div class="results"> </div
};
