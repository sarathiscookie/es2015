/*window.onload = function() {
	const company = document.querySelector('#company');
	const contact = document.querySelector('#contact');
	const country = document.querySelector('#country');
	console.log(company + contact + country);
}*/
const button = document.querySelector('.createCustomer');
let i = 1;

button.onclick = function(e) {
	e.preventDefault(); 
	//debugger;
	const company = document.querySelector('#company').value;
	const contact = document.querySelector('#contact').value;
	const country = document.querySelector('#country').value;
	const status  = 1;
	let increment = i++
	console.log(appendValues(company, contact, country, status, increment)); // Html is showing correctly on console
}

/**
 * [Creating table rows, columns and appending values]
 * @param  {string} company
 * @param  {string} contact
 * @param  {string} country
 * @param  {integer} status
 * @return {string}
 */
function appendValues(company, contact, country, status, increment)
{
	let html = '<tr id="tableRow" class="row_'+increment+'">'+
	'<td>'+company+'</td>'+
	'<td>'+contact+'</td>'+
	'<td>'+country+'</td>'+
	'<td>'+customerStatus(status)+'</td>'+
	'<td><button class="button button3 green">Edit</button> <button class="button button3 red">Delete</button></td>'+
	'</tr>';

	return html;
}

/**
 * Button for customer status
 * @param  {integer} status
 * @return {string}
 */
function customerStatus(status)
{
	const buttonStatusColor = '';
	if (status === 1){
		const buttonStatusColor = '<button class="button button1 green">Enabled</button>';
	}
	else {
		const buttonStatusColor = '<button class="button button1 red">Disabled</button>'; 
	}

	return buttonStatusColor;
}


