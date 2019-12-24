<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Spread Operator</title>
</head>
<body>
	<script>

		function calculateAge(age, ...years) {
            years.forEach(el => console.log((2019 - el) > age));
        }

        calculateAge(21, 1996, 1995, 1900, 2000, 2015);
	</script>
</body>
</html> 