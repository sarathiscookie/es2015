var button = document.querySelector('button');
button.onclick = function() {
    createColor(255);
};

function createColor(num)
{
    var math        = Math.floor(Math.random()*(num+1));
    var randomColor = 'rgb(' + math + ',' + math + ',' + math + ')';
    return document.body.style.backgroundColor = randomColor;
}