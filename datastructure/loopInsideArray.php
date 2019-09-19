<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Loop inside array</title>
</head>
<body>
<h6>Loop inside array</h6>
<script>
	function arrayLoop(arr)
	{
		let newArr = [];

		for (let i = 0; i < arr.length; i++) {
			if(arr[i] > 10) {
				newArr.push(arr[i]);
			}
		}

		return newArr;
	}

	console.log(arrayLoop(5, 2, 6, 12, 19, 11));
</script>
</body>
</html>