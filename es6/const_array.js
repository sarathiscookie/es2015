const dataArray = [5,7,9];

function arrayUpdate() {
	"use strict";

	dataArray[0] = 1;
	dataArray[1] = 2;
	dataArray[2] = 3;

	return dataArray;
}

console.log(arrayUpdate()); // Result is [1,2,3]. We can redeclare array values.