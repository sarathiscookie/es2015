/*Redeclare arrays*/

const dataArray = [5,7,9];

function arrayUpdate() {
	"use strict";

	dataArray[0] = 1;
	dataArray[1] = 2;
	dataArray[2] = 3;

	return dataArray;
}

console.log(arrayUpdate()); // Result is [1,2,3]. We can redeclare array values.

/*Redeclare objects*/

const obj = {
	PI : 3.14
};

obj.PI = 5;

console.log(obj); // Result is 5. We can redeclare object values.