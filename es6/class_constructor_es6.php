<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Spread Operator</title>
</head>
<body>
	<script>

		class Person {
            constructor(name, yearOfBirth, email) {
                this.name = name;
                this.yearOfBirth = yearOfBirth;
                this.email = email;
            }

            ageCalculation() {
                return new Date().getFullYear() - this.yearOfBirth;
            }
        }

        const user = new Person('Mark', 1991, 'mark@gmail.com');

        console.log(user);
        console.log(user.ageCalculation());
	</script>
</body>
</html> 