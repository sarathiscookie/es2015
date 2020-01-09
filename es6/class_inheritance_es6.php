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

        const personDetails = new Person('Peter', 1990, 'peter@gmail.com');
        // User details
        console.log(personDetails);
        // Age calculation
        console.log(personDetails.ageCalculation());

        // Inheritance
        class Athlets extends Person {
            constructor(name, yearOfBirth, email, category, country, appearence) {
                super(name, yearOfBirth, email);
                this.category = category;
                this.country = country;
                this.appearence = appearence;
            }

            calculateAppearence() {
                return new Date().getFullYear() - (this.appearence * 4);
            }
        }

        const athlete = new Athlets('Bolt', 1986, 'bolt@gmail.com', 'Sprinter', 'Jamaica', 3);

        // Athlete Details
        console.log(athlete);
        // Athlete appearence calculations
        console.log(athlete.calculateAppearence());
        // Athlete age calculation
        console.log(athlete.ageCalculation());


	</script>
</body>
</html> 