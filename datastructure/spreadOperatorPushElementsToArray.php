<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Spread Operator</title>
</head>
<body>
	<div class="container">
		<h1>Push elements in to array using spread operator</h1>
	</div>
	<script>
		function htmlColorsSpreadOper(arr, num)
		{
			let newArray = [];

			if(num >= 2) {
				newArray.push([...arr]);
			}

			return newArray;
		}

		console.log(htmlColorsSpreadOper(['red', 'blue', 'orange', 'yellow', 'green'] , 2));
	</script>
</body>
</html>
