var url = 'http://localhost/es2015/json/data.json';

var request = new XMLHttpRequest();

request.open('GET', url);

request.responseType = 'json';

request.send();

request.onload = function() {
    var response = request.response;
};

function dom()
{
    // create dom and append
}