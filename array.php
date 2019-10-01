<!doctype html>
<html lang="en">
<head>
    <title>Javascript: Array</title>
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
 * Created by php on 27-Mar-18.
 */

 /* Array push and pop begin */
 function arrayPush(data)
 {
 	var arr = ['red', 'green', 'yellow'];
    var pushedData = arr.push(data); // Add data in to end of array and return length if return "pushedData"
    return arr;
}

console.log('******** Array add and remove data from the end of array ********');
console.log(arrayPush('violet'));

function arrayPop()
{
	var arr = ['red', 'green', 'yellow', 'violet'];
    var pushedData = arr.pop(); // Remove data from the end of array
    return arr;
}

console.log(arrayPop());
/* Array push and pop end */

/* Array unshift and shift begin */
console.log('******** Array add and remove data from the beginning of array ********');

var arrayUnshift = function unShift() {
	var arr = ['red', 'green', 'violet'];
	var unshifted = arr.unshift('yellow');
	return arr;
};

console.log(arrayUnshift());

function arrayShift()
{
	var arr = ['yellow', 'red', 'green', 'violet'];
	var shifted = arr.shift();
	return arr;
}

console.log(arrayShift());
/* Array unshift and shift end */

/* IndexOf */

console.log('******** Index of array ********');

function indexOfArray()
{
    var arr = ['jay', 'peter', 'jane', 'peter', 'maria']; // Here peter is two times but index of took first value of peter
    var indexed = arr.indexOf('peter');
    return indexed;
}

console.log(indexOfArray());

/* Slice */

console.log('******** Slice an array ********');

function sliceArray()
{
	var arr = [121, 131, 'jane', 'peter', 151, 161];
    var indexed = arr.slice(2, 4); //2 starting point and 4 ending point
    return indexed;
}

console.log(sliceArray());

/* Length of array */
console.log('******** Length of array ********');

var array = [12, 13, 14, 15, 16, 17];
console.log(array.length);
</script>
</body>
</html>