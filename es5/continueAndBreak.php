<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Continue And Break</title>
</head>
<body>

<script>
	let userDetails = ['john', 'smith', 1986, 'married', 'usa'];

	for(let i = 0; i < userDetails.length; i++) {
		//skip all the numbers from array
		if(typeof(userDetails[i]) !== 'string') continue;
		console.log(userDetails[i]);
	}

	for(let i = 0; i < userDetails.length; i++) {
		//skip all the numbers from array
		if(typeof(userDetails[i]) !== 'string') break;
		console.log(userDetails[i]);
	}
</script>
</body>
</html>
