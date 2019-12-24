<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Spread Operator</title>
</head>
<body>
	<script>

        let userDetails = new Map();

        userDetails.set('firstName', 'Jane');
        userDetails.set('lastName', 'Doe');
        userDetails.set(true, 'Married');
        userDetails.set(false, 'Single');
        userDetails.set(1, 'Programmer');

        console.log(userDetails.get(false));
        console.log(userDetails.get(1));
        console.log(userDetails.size);

        
/*get, set, has, delete, clear, entries, forEach, keys, values, entries, size:*/

	</script>
</body>
</html> 