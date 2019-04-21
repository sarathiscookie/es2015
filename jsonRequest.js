var url = 'https://localhost/es2015/json/data.json';

var request = new XMLHttpRequest();

request.open('GET', url);

request.responseType = 'json';

request.send();

request.onload = function() {
	var response = request.response;
	headerFn(response);
	bodyFn(response);
};

/**
 * @type {sring}
 */
var header = document.querySelector('header');
var section = document.querySelector('section');

/**
 * @param  {object} response
 * @return {object}
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
 * @param  {object} response
 * @return {object}
 */
function bodyFn(response)
{
	var members = response['members'];
	for(var i = 0; i < members.length; i++) {
		var article = document.createElement('article');

		var h2 = document.createElement('h2');
		h2.textContent = members[i].name;
		article.appendChild(h2);

		var paraIdentity = document.createElement('p');
		paraIdentity.textContent = 'Secret identity: '+members[i].secretIdentity;
		article.appendChild(paraIdentity);

		var paraAge = document.createElement('p');
		paraAge.textContent = 'Age: '+members[i].age;
		article.appendChild(paraAge);

		var paraSuperPower = document.createElement('p');
		paraSuperPower.textContent = 'Superpowers:';
		article.appendChild(paraSuperPower);

		var ul = document.createElement('ul');
		article.appendChild(ul);

        for(var j = 0; j < members[i].powers.length; j++) {
        	var li = document.createElement('li');
        	li.textContent = members[i].powers[j];
        	ul.appendChild(li);
        }
	
		section.appendChild(article);
	}
}
