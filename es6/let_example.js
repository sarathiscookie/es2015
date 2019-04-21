//Let
let values = [];
for (let i = 0; i < 5; i++) {
	values.push(i);
}

console.log(values); // 0,1,2,3,4,5
console.log(i); // Uncaught ReferenceError: i is not defined.
// When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression