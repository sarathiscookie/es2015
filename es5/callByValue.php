<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Call by reference</title>
</head>
<body>
	<script>
        let original = 10;
        
        function updateOriginal(originalVal) {
            originalVal += 10;
            console.log(originalVal);
        }

        updateOriginal(original);

        console.log(original);
	</script>
</body>
</html> 