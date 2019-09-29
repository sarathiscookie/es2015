<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>Object Literals</h1>
<script> 
let staff = {
	name: "Peter",
	address: "Kochi",
    mobile: "99999999",
    calculateAge: function() {
    	console.log(this);
    }
}

staff.calculateAge();

let manager = {
	name: "John",
	address: "Mumbai",
    mobile: "888888888"
}

manager.calculateAge = staff.calculateAge;

manager.calculateAge();

</script>
</body>
</html>
