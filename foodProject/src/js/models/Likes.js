export default class Likes {
    constructor() {
        this.likes = [];
    }

    /* Add items in to array. */ 
    addLike(id, title, author, img) {
        const like = { id, title, author, img };
        this.likes.push(like);

        // Persist item in local storage
        this.persistData();

        return like;
    }

    /* Delete items from array. */
    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        // Persist item in to local storage
        this.persistData();
    }

    /* Return liked results only */
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    /* Get num of likes */
    getNumLikes() {
        return this.likes.length;
    }

    /* Store item in to local storage */
    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    /* Read item from local storage */
    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));

        // Restoring likes from the localstorage
        if( storage ) this.likes = storage;
    }
}