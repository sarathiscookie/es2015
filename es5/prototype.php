<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>Inheritance</h1>
<script> 
let vehicle = function(name, model, yearOfManufacture) {
    this.name = name;
    this.model = model;
    this.yearOfManufacture = yearOfManufacture;
}

vehicle.prototype.serviceDate = function(servicedOn) {
    return this.servicedOn = 2019 - servicedOn;
}

let bmw = new vehicle('bmw', 'x6', 2017);
let benz = new vehicle('benz', 'cla', 2018);
let audi = new vehicle('audi', 'a4', 2019);

console.log(bmw.serviceDate(2018));
console.log(benz.serviceDate(2017));
console.log(audi.serviceDate(2016));

</script>
</body>
</html>
