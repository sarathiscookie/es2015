import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    /* Add items in to array. */ 
    addItem(count, unit, ingredient) {
        // In es6 item = { count, unit, ingredient } is enough, but in es5 { count: count, unit: unit, ingredient: ingredient }
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };

        this.items.push(item);
        return item;
    }

    /* Delete items from array. */
    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);
    }

    /* Update count */
    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}