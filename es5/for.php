<!doctype html>
<html lang="en">
<head>
    <title>Javascript: For</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
</head>
<body>
<h1>Result</h1>
<div id="userdetails"></div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<script>
	/**
 * Created by php on 11-Jan-18.
 */
 console.log('Print all numbers b/w -10 and 19');

 for (var i = -10; i <= 19; i++)
 {
 	console.log(i);
 }
 console.log('Print all even numbers b/w 10 and 40');

 for (var i = 10; i <= 40; i += 2)
 {
 	console.log(i);
 }

 console.log('Print all odd numbers b/w 300 and 333');

 for (var i = 300; i < 333; i++)
 {
 	if(i % 2 == 1){
 		console.log(i);
 	}

 }

 console.log('Print all numbers divisible by 5 and 3 b/w 5 and 50');

 for (var i = 5; i <= 50; i++)
 {
 	if(i % 5 == 0 && i % 3 == 0)
 	{
 		console.log(i);
 	}
 }


</script>
</body>
</html>