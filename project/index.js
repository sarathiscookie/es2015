//https://medium.com/@etiennerouzeaud/a-simple-crud-application-with-javascript-ebc82f688c59

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

    this.Status = function(item) {
        const enable = document.querySelector('.enabledisablestatus');

        let status = enable.dataset.status;
        let color;
        
        if(status === '0') {
            color = 'green';
            customerStatus(1, item, color);
        }
        else {
            color = 'red';
            customerStatus(0, item, color);
        }
    }

    this.Edit = function(item) {

    }

    this.Delete = function(item) {
    	
    }

}

function appendValues(company, contact, country, status, increment)
{
    let color = (status === 0) ? 'red' : 'green';
    const html = '<tr>'+
    '<td><input type="checkbox"></td>'+
    '<td>'+company+'</td>'+
    '<td>'+contact+'</td>'+
    '<td>'+country+'</td>'+
    '<td class="enabledisablestatus" data-status="'+status+'">'+customerStatus(status, increment, color)+'</td>'+
    '<td><button class="button button3 green">Edit</button> <button class="button button3 red">Delete</button></td>'+
    '</tr>';

    return html;
}

function customerStatus(status, increment, color)
{
    console.log('status ' + status +' increment: '+ increment +' color: '+ color);
    let buttonStatusColor = '<button onclick="app.Status('+ increment +')" class="button button1 '+color+'">Enable</button>'; 

    return buttonStatusColor;
}


     

    