import { elements } from './base';

/* Get value from search box */
export const getOrdersInput = () => elements.searchOrdersInput.value;

/* Clearing search input */
export const clearInput = () => {
    elements.searchOrdersInput.value = '';
}

/* Clearing search input */
export const clearResults = () => {
    elements.ordersList.innerHTML = '';
}

/* Rendering data in to view */
const renderOrders = order => {
    const markup = `
        <tr>
            <td><input type="checkbox" aria-label="Checkbox for following text input"></td>
            <td>${order.order_no}</td>
            <td><button id="myBtn_${order.order_no}">Client</button></td>
            <td>${order.status}</td>
            <td>${order.max_shipping_date}</td>
            <td><a href="">Item Id</a></td>
            <td>Action</td>
        </tr>
        
        <!-- The Modal -->
        <div id="myModal_${order.order_no}" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        Cras justo odio
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">${order.client.first_name}</a>
                    <a href="#" class="list-group-item list-group-item-action">${order.client.last_name}</a>
                    <a href="#" class="list-group-item list-group-item-action">${order.client.email}</a>
                    <a href="#" class="list-group-item list-group-item-action">${order.client.city}</a>
                </div>
            </div>

        </div>
    `;

    elements.ordersList.insertAdjacentHTML('beforeend', markup);

    // Get the modal
    let modal = document.getElementById("myModal_" + order.order_no);

    // Get the button that opens the modal
    let btn = document.getElementById("myBtn_" + order.order_no);

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close");

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

};

export const renderOrdersResult = orders => {
    orders.forEach(renderOrders);
};