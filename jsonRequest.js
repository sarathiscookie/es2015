var url = 'http://localhost/es2015/json/data.json';

var request = new XMLHttpRequest();

request.open('GET', url);

request.responseType = 'json';

request.send();

request.onload = function() {
	var response = request.response;
	headerFn(response);
};

/**
 * @type {sring}
 */
var header = document.querySelector('header');

/**
 * [header description]
 * @param  {string} response
 * @return {string}
 */
function headerFn(response)
{
	var h1 = document.createElement('h1');
	h1.textContent = response['squadName'];
	header.appendChild(h1);

	var paragraph = document.createElement('p');
	paragraph.textContent = 'Hometown: '+ response.homeTown +' Formed: '+ response.formed; 
	header.appendChild(paragraph);
}

/**
 * [body description]
 * @return {[type]} [description]
 */
function bodyFn()
{

}
