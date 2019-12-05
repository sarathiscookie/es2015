<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<script>
		//Example 1
		const [name, age, address, email] = ['Peter', 32, 'Germany', 'peter@gmail.com'];
		console.log(name);
		console.log(age);
		console.log(address);
		console.log(email);

        // Example 2
        const obj = {
        	company: 'Infosystems',
        	year: 1992,
        	loc: 'Sweden',
        	contact: 'info@gmail.com'
        }
		const {company, year, loc, contact} = obj;
		console.log(company);
		console.log(year);
		console.log(loc);
		console.log(contact);

        // Example 3
        function calculateAge(year) 
        {
        	return [new Date().getFullYear() - year, new Date().getFullYear(), year];
        }
        const[ageDiff, currentYear, dob] = calculateAge(1986);

        console.log(ageDiff);
        console.log(currentYear);
        console.log(dob);
	</script>
</body>
</html>