var div    = document.querySelector('div');
var show   = document.querySelector('button');
var hide   = document.querySelector('.hide');

show.onclick = function() {
    div.setAttribute('class', 'showing');
};

hide.onclick = function() {
    div.setAttribute('class', 'hidden');
};