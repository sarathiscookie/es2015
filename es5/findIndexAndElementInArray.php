<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Map Functions</title>
</head>
<body>
<h4> Map method ES5 </h4>
<script>
	var ages = [10, 15, 17, 20, 11, 9];
	var mapArray = ages.map(function(element) {
		return element > 18;
	});

	console.log(mapArray);

	console.log(mapArray.indexOf(true)); // Find the index of array element.

	console.log(ages[mapArray.indexOf(true)]); // Find the value of array element.
</script>
</body>
</html>
