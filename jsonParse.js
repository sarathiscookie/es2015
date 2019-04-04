var url = 'http://localhost/es2015/json/data.json';

var request = new XMLHttpRequest();

request.open('GET', url);
request.responseType = 'text';
request.send();

request.onload = function() {
    var response = JSON.parse(request.response); // It convert text to object
    console.log(response);
};