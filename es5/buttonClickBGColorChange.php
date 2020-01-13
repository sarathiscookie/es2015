<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<button>Change color</button>

<script>
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

</script>
</body>
</html>
