<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
	<div class="container">
		<h1>Splice</h1>
	</div>
	<script>
		function sumOfTen(arr) {
			arr.splice(1,2);    // (1,2) 1 = index of array element and 2 = how many? 
			return arr.reduce((a, b) => a + b);
        }

        console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
	</script>
</body>
</html>
