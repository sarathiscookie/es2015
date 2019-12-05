<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<script>
		const temperature = {
			today: { min: 24, max: 48},
			tomorrow: {min: 23,  max: 45}
		};

		function secondAttempt(tempVariable) {
			const {today: today, tomorrow: tomorrow} = tempVariable;
			return tomorrow;
		}

		console.log(secondAttempt(temperature));
	</script>
</body>
</html>