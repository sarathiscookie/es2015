"use strict"

import '../css/style.css';
import Orders from './models/Orders';
import * as orderView from './views/orderView';

const state = {};

const ordersController = async () => {

    // Pass query to models.
    state.orders = new Orders();

    try {
        // Get orders
        await state.orders.getResult();

        // Render results on UI
        if( state.orders.result.success === '1' ) {

            //console.log(state.orders.result); 
            console.log(state.orders.result);
            
            orderView.renderOrdersResult(state.orders.result.orders.order);
        }
        
    }
    catch (err) {
        console.log(err);
    }
}


/* On page load list orders */
window/addEventListener('load', () => {
    ordersController();
});