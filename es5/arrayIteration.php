<!doctype html>
<html lang="en">
<head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
</head>
<body>
<h1>Array Iteration</h1>
<div id="arrayIteration"></div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<script>
	/**
 * Created by php on 04-Apr-18.
 */
 console.log("************ Normal foreach iteration *************");
 var color = ["Green", "Yellow", "Orange", "Red"];
 var colorValue = [];
 color.forEach(function(color){
 	var colorHtml = "Color is : "+color+ "<br/>";
 	colorValue.push(colorHtml);
 	console.log('********');
 	console.log("Color is : "+color);
 	console.log('********');
 });
 document.getElementById('arrayIteration').innerHTML = colorValue;

 console.log("************ Foreach iteration using function *************");
 function forEachIteration(color)
 {
 	console.log('********');
 	console.log("Foreach iteration using function. Color is : "+color);
 	console.log('********');
 	var colorHtml = "Foreach iteration using function. Color is : "+color+ "<br/>";
 	colorValue.push(colorHtml);
 	document.getElementById('arrayIteration').innerHTML = colorValue;
 }

 color.forEach(forEachIteration);

</script>
</body>
</html>