var button = document.querySelector('button');

function random(num)
{
    return Math.floor(Math.random()*(num+1));
}

function createColor()
{
    var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return document.body.style.backgroundColor = randomColor;
}

button.onclick = createColor;

/*
setInterval(function(){
    createColor();
}, 1000);*/
