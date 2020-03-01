<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Call by reference</title>
</head>
<body>
	<script>
		let myObj = {
            value: 10
        }

        function updateValue(objRef) {
            objRef.value = 20;
        }

        updateValue(myObj);

        console.log(myObj.value);
	</script>
</body>
</html> 