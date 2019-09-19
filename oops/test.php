<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Splice</title>
</head>
<body>
	<div class="container">
		<h1>Removing item and taking sum of array elements</h1>
	</div>
	<script>
		let users = {
			Alan: {
				age: 27,
				online: false
			},
			Jeff: {
				age: 32,
				online: true
			},
			Sarah: {
				age: 48,
				online: false
			},
			Ryan: {
				age: 19,
				online: true
			}
		};

		function countOnline(obj) {
			for(let user in obj) {
				console.log(user[0]);
			}
		}

console.log(countOnline(users));

	</script>
</body>
</html>
