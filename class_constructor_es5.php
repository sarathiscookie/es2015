<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Spread Operator</title>
</head>
<body>
	<script>

		var Person = function(name, address, email, yearOfBirth) {
			this.name = name;
			this.address = address;
			this.email = email;
			this.yearOfBirth = yearOfBirth;
		}

		Person.prototype.calculateAge = function() {
			return new Date().getFullYear() - this.yearOfBirth;
		}

		const userdetails = new Person('Peter', 'Kochi', 'peter@gmail.com', 1990);

		console.log('Age:' + userdetails.calculateAge());
	</script>
</body>
</html> 