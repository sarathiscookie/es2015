<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<script>
		var i = 0;
		while(i < 5) {
			i++;
			if(i === 3) {
				continue;
			}
			console.log(i);
		}
	</script>
</body>
</html>