const arrays = [2, 3.5, 4, 4.5, 6, -6.5, -7];

const filter = arrays.filter( (arr) => arr > 0 && arr % 2 == 0);

const square = filter.map( (sqr) => Math.pow(sqr, 2) );

console.log(square);
