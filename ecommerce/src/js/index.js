"use strict"

import '../css/style.css';
import Orders from './models/Orders';
import * as orderView from './views/orderView';
import { elements } from './views/base';

const state = {};

const ordersController = async () => {

    // Get search query from view
    let ordersQuery;

    if( orderView.getOrdersInput() !== '' ) {
        ordersQuery = orderView.getOrdersInput();

        orderView.clearInput(); // Clear search input.
        orderView.clearResults(); //Clear search result.
    }
    else {
        ordersQuery = null;
    }
    
    state.orders = new Orders(ordersQuery);

    try {
        // Get orders
        await state.orders.getResult();

        // Render results on UI
        if( state.orders.result.success === '1' ) {
            //console.log(state.orders.result);
            orderView.renderOrdersResult(state.orders.result.orders.order);
        }
        
    }
    catch (err) {
        console.log(err);
    }
}


/* On page load list orders */
window.addEventListener('load', () => {
    ordersController();
});

/* Searching orders */
elements.searchOrdersForm.addEventListener('submit', e => {
    e.preventDefault();
    ordersController();
})