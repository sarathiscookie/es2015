import { elements } from './base';

/* Get value from search box */
export const getOrdersInput = () => elements.searchOrdersInput.nodeValue;

/* Rendering data in to view */

const renderOrders = order => {
    const markup = `

        <tr>
            <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
            <td>${order.order_no}</td>
            <td><a href="">Client Id</a></td>
            <td>${order.status}</td>
            <td>${order.max_shipping_date}</td>
            <td><a href="">Item Id</a></td>
            <td>Action</td>
        </tr>

    `;

    elements.responsiveTable.insertAdjacentHTML('beforeend', markup);
};

export const renderOrdersResult = orders => {
    orders.forEach(renderOrders);
};