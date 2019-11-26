<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Map Functions</title>
</head>
<body>
<h4> Map function for year difference </h4>
<script>
	const years = [1990, 1998, 2000, 2019];

	let yearCalculation = years.map(el => new Date().getFullYear() - el);
    console.log(yearCalculation);

    let yearCalculationWithDescription = years.map((el, index) => {
    	const now = new Date().getFullYear();
    	const calculation = now - el;

    	return `Age element ${index + 1}: ${calculation}`;
    });
    console.log(yearCalculationWithDescription);
</script>
</body>
</html>
