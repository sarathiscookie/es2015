<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="container">
	<h1>Delete Objects</h1>
</div>
<script>
	var obj = {
		"name": "Peter",
		"age": 35,
		"country": "de"
	};
	delete obj.country;

	console.log(obj);
</script>
</body>
</html>
