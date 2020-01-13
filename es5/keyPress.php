<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<input type="text" name="name" class="nameClass">

	<script>
		// "keyCode" and "which": old browser doesn't support keyCode
		document.addEventListener('keypress', function(event) {
			if(event.keyCode === 13 || event.which === 13) {
				console.log('Enter key pressed');
			}
		});
	</script>
</body>
</html>