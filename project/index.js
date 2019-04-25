/*window.onload = function() {
	const company = document.querySelector('#company');
	const contact = document.querySelector('#contact');
	const country = document.querySelector('#country');
	console.log(company + contact + country);
}*/
const button = document.querySelector('.createCustomer');
const tbody = document.querySelector('#tbody'); // document.getElementById('tbody')
let i = 1;

button.onclick = function(e) {
	e.preventDefault(); 
	//debugger;
	const company = document.querySelector('#company').value;
	const contact = document.querySelector('#contact').value;
	const country = document.querySelector('#country').value;
	let status  = 1;
	let increment = i++;
	const html = appendValues(company, contact, country, status, increment);

	if(company !== '' && contact !== '') {
		tbody.insertAdjacentHTML('afterbegin', html);
	}
	else {
		alert('Please fill the data');
	}
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
	const html = '<tr id="tableRow" class="row_'+increment+'">'+
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
	let buttonStatusColor = '';
	if (status === 1) {
		buttonStatusColor = '<button class="button button1 green">Enabled</button>';
	}
	else {
		buttonStatusColor = '<button class="button button1 red">Disabled</button>'; 
	}

	return buttonStatusColor;
}


