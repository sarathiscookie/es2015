<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>IndexOf</title>
</head>
<body>

<script>
	function quickCheck(arr, item)
	{
		return (arr.indexOf(item) >= 1) ? true : false ;
	}

	console.log(quickCheck([3, 5, 9, 125, 45, 2], 125))
</script>
</body>
</html>