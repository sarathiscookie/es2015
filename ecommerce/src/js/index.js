"use strict"

import '../css/style.css';
import Orders from './models/Orders';

const state = {};

const ordersController = async () => {

    // Pass query to models.
    state.orders = new Orders();

    try {
        // Get orders
        await state.orders.getResult();

        // Render results on UI
        console.log(state.orders.result);
    }
    catch (err) {
        console.log(err);
    }
}


/* On page load list orders */
window/addEventListener('load', () => {
    ordersController();
});