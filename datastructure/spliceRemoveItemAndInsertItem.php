<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Splice</title>
</head>
<body>
	<div class="container">
		<h1>Removing item and insert new items</h1>
	</div>
	<script>
		function htmlColors(arr)
		{
			arr.splice(0, 2, 'voilet', 'brown');
			return arr;
		}

		console.log(htmlColors(['red', 'blue', 'orange', 'yellow', 'green']));
	</script>
</body>
</html>
