<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script>
	function addRemoveItems(arr, item)
	{
		var add = arr.push(item);

		var remove = arr.shift();

		return remove;
	}

	var arrayData = [1,2,3,4,5];
	console.log(addRemoveItems(arrayData, 6));
</script>
</body>
</html>