<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<script>
		let vehicle = {
			type: 'Car',
			wheels: '4',
			description: function() {
				console.log('This is a '+this.type+'. This can has '+this.wheels+' wheels');
			}
		}

		let details = function(category, fuelType) {
			console.log('This is a ' +category+ ' car and it has '+fuelType+' engine');
		}

		//bind()
		let bindData = details.bind(vehicle);
		bindData('premium', 'petrol');

		//call()
		details.call(vehicle, 'premium', 'diesel');

		//apply
		details.apply(vehicle, ['premium', 'electric']);
	</script>
</body>
</html>