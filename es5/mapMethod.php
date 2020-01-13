<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Map Functions</title>
</head>
<body>
<h4> Map function for year difference </h4>
<script>
	var years = [1990, 1998, 2000, 2019];

	var yearCalculation = years.map(function(el) {
		return new Date().getFullYear() - el;
	});

	console.log(yearCalculation);
</script>
</body>
</html>
