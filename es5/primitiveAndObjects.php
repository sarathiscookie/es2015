<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<script>
		/* Primitive */
		let a = 23;
		let b = a;
		a = 46;
		console.log(a);
		console.log(b);
		//Initial result a will not change

		/* Objects */
		let objOne = {
			name: 'john',
			age: 25
		}

		let objTwo = objOne;

		objOne.age = 50;
		objTwo.name = 'Peter';
		console.log(objOne);
		console.log(objTwo);
		//Both object values changed
	</script>
</body>
</html>