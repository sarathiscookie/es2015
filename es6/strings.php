<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<script>
		let firstName = 'Jane';
		let lastName = 'Doe';
		const year = 1986;
		const fullName = `${firstName} ${lastName} `;

		console.log(`My name is ${firstName} ${lastName}. I am ${2019 - year} old.`);
		console.log(firstName.startsWith('J'));
		console.log(lastName.endsWith('e'));
		console.log(fullName.includes(' '));
		console.log(fullName.repeat(5));
	</script>
</body>
</html>