<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>Inheritance</h1>
<script> 
let person = function(name, contact, role, age) {
	this.name = name;
	this.contact = contact;
	this.role = role;
	this.age = age;
};

person.prototype.calculateBornYear = function() {
	return 2019 - this.age;
};

let john = new person('john', '998898989', 'manager', 35);
let mark = new person('mark', '44444444', 'clerk', 30);

console.log(john.calculateBornYear());
console.log(mark.calculateBornYear());

</script>
</body>
</html>
