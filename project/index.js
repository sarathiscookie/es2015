let app = new function() {
	const button = document.querySelector('.createCustomer');
	const tbody = document.querySelector('#tbody'); // document.getElementById('tbody')
	let i = 1;

	this.Add = function() {
		const company = document.querySelector('#company').value;
		const contact = document.querySelector('#contact').value;
		const country = document.querySelector('#country').value;
		let status  = 0;
		let increment = i++;

		if(company !== '' && contact !== '') {
			const html = appendValues(company, contact, country, status, increment);
			tbody.insertAdjacentHTML('afterbegin', html);
		}
		else {
			alert('Please fill the data');
		}
    }

    this.Enable = function(item) {

    }

    this.Disable = function(item) {
    	
    }

    this.Edit = function(item) {

    }

    this.Delete = function(item) {
    	
    }

    /**
     * [appendValues description]
     * @param  {[type]} company   [description]
     * @param  {[type]} contact   [description]
     * @param  {[type]} country   [description]
     * @param  {[type]} status    [description]
     * @param  {[type]} increment [description]
     * @return {[type]}           [description]
     */
    function appendValues(company, contact, country, status, increment)
    {
    	const html = '<tr id="tableRow" class="row_'+increment+'">'+
    	'<td><input type="checkbox"></td>'+
    	'<td>'+company+'</td>'+
    	'<td>'+contact+'</td>'+
    	'<td>'+country+'</td>'+
    	'<td>'+customerStatus(status, increment)+'</td>'+
    	'<td><button class="button button3 green">Edit</button> <button class="button button3 red">Delete</button></td>'+
    	'</tr>';

    	return html;
    }

    /**
     * [customerStatus description]
     * @param  {[type]} status [description]
     * @return {[type]}        [description]
     */
    function customerStatus(status, increment)
    {
    	let buttonStatusColor = '';

    	if (status === 0) {
    		buttonStatusColor = '<button onclick="app.Enable('+ increment +')" class="button button1 green enable">Enable</button>';
    	}
    	else {
    		buttonStatusColor = '<button onclick=app.Disable('+ increment +') class="button button1 red" disable>Disable</button>';
    	}

    	return buttonStatusColor;
    }


}

