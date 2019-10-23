<!doctype html>
<html lang="en">
<head>
    <title>Javascript: Function</title>
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
 * Created by php on 01-Feb-18.
 */

 /* Checking even or not */
 console.log('******** Checking even or not *********');
 function isEven(num)
 {
 	if(num % 2 === 0){
 		return true;
 	}
 	else {
 		return false;
 	}
 }
 var result = isEven(2);
 console.log(result);

 /* Checking factorial of a number */
 console.log('******** Checking factorial of a number *******');
 var factorial = function fact(num){
 	var result = 1;
 	for(i = 1; i <= num; i++){
 		result *= i;
 	}
 	return result;
 };
 console.log(factorial(10));

 /* Snake case to camel case */
 console.log('********** Snake case to camel case ***********');
 function letterCase(str)
 {
 	var converted = str.replace(/-/g, '_');
 	return converted;
 }
 console.log(letterCase('Hello-world'));

 console.log('******** Global Scope ***********');
 var strGlobal = 'Global scope';
 function globalscope()
 {
 	return strGlobal;
 }
 console.log(globalscope());

 console.log('******** Local Scope ***********');
 function localscope()
 {
 	var strLocal = 'Local scope';
 	return strLocal;
 }
 console.log(localscope());

 console.log('******** Scope example 1 ***********');
 var numExampleOne = 5;
 function doMatchEgOne()
 {
 	var numExampleOne = 6;
 	return numExampleOne;
 }
 console.log(doMatchEgOne());
 console.log(numExampleOne);

 console.log('******** Scope example 2 ***********');
 var numExampleTwo = 10;
 function doMatchEgTwo()
 {
 	numExampleTwo = 16;
 	return numExampleTwo;
 }
 console.log(doMatchEgTwo());
 console.log(numExampleTwo);

 console.log('******** Scope example 3 ***********');
 var num = 8;
 function calculation()
 {
 	num += 1;
 	if(num % 5 === 0){
 		return true;
 	}
 	else {
 		return false;
 	}
 }
 num += 1;
 console.log(calculation());

</script>
</body>
</html>