const arrays = [2, 3.5, 4, 4.5, 6, -6.5, -7];

const fun = (param) => {
	const result = param.filter( (arr) => arr > 0 && arr % 2 == 0).map( (sqr) => Math.pow(sqr, 2) );
	return result;
}


console.log(fun(arrays));
