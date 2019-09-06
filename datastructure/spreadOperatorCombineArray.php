<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Spread Opertor</title>
</head>
<body>
	<div class="container">
		<h1>Push elements in to array using spread operator</h1>
	</div>
	<script>
		function sentence()
		{
			let sentenceBegin   = ['learning'];
			let sentenceMiddle  = ['to', 'code'];
			let sentenceEnd     = [...sentenceBegin, ...sentenceMiddle, 'is', 'fun'];

			return sentenceEnd;
		}

		console.log(sentence());
	</script>
</body>
</html>
