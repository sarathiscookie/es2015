<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Slice</title>
</head>
<body>
	<div class="container">
		<h1>Slice</h1>
	</div>
	<script>
		function htmlColorsSlice(arr)
		{
			return arr.slice(2,4);
		}

		console.log(htmlColorsSlice(['red', 'blue', 'orange', 'yellow', 'green']));
	</script>
</body>
</html>
