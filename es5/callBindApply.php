<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<script>
		let employee = {
			name: 'John',
			wishes: function(wishType, message) {
				if(wishType === 'formal') {
					console.log('This is a '+ wishType +' message. Hello ' +message+ '. Wish from '+this.name );
				}
				else if(wishType === 'casual') {
					console.log('This is a '+ wishType +' message. Hello ' +message+ '. Wish from '+this.name);
				}
				else {
					console.log('Wrong wish type');
				}
			}

		}

		//Calling
		employee.wishes.call(employee, 'casual', 'Good Night');

		//Binding
		let employeeNewWish = employee.wishes.bind(employee, 'formal');
		employeeNewWish('Good Evening');

		//Applying
		employee.wishes.apply(employee, ['casual', 'sweet dreamzzzz']);

		//Normal
		employee.wishes('casual', 'Good Morning');


	</script>
</body>
</html>