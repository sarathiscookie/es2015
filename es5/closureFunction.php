<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<script>
		function vehicle(vehicleName) {
			if(vehicleName === 'bmw') {
				return function(name) {
					console.log(name + ' have a luxury car');
				}
			}
			else {
				return function(name) {
					console.log(name + ' have no luxury cars');
				}
			}
		}

		vehicle('benz')('John');
	</script>
</body>
</html>