<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		function ages(a, b, c, d) {
			return a + b + c + d; 
		}

		let numbers = [10, 20, 30, 40];
		let result = ages(...numbers);

		console.log(result);
	</script>
</body>
</html> 