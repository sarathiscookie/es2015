<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Spread Operator</title>
</head>
<body>
	<script>
		const spread_array = [1.85, 34,109, 566, -2];
		const spread_operator_min = Math.min(...spread_array);
		const spread_operator_max = Math.max(...spread_array);
		console.log('Min: ' + spread_operator_min + ' Max: '+ spread_operator_max);
	</script>
</body>
</html> 