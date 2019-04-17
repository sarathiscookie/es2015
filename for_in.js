var car = {
	'make': 'Ford',
	'model': 'Mustang',
};
car.engine = 'Patrol';

var result = '';

for (i in car) {
	result += i +  ':' + car[i] +' ';
}

console.log(result);
