/**
 * Created by php on 01-Feb-18.
 */

/* Checking even or not */
console.log('******** Checking even or not *********');
function isEven(num)
{
    if(num % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
var result = isEven(2);
console.log(result);

/* Checking factorial of a number */
console.log('******** Checking factorial of a number *******');
var factorial = function fact(num){
    var result = 1;
    for(i = 1; i <= num; i++){
        result *= i;
    }
    return result;
};
console.log(factorial(10));

/* Snake case to camel case */
console.log('********** Snake case to camel case ***********');
function letterCase(str)
{
    var converted = str.replace(/-/g, '_');
    return converted;
}
console.log(letterCase('Hello-world'));

console.log('******** Global Scope ***********');
var strGlobal = 'Global scope';
function globalscope()
{
   return strGlobal;
}
console.log(globalscope());

console.log('******** Local Scope ***********');
function localscope()
{
    var strLocal = 'Local scope';
    return strLocal;
}
console.log(localscope());

console.log('******** Scope example 1 ***********');
var numExampleOne = 5;
function doMatchEgOne()
{
    var numExampleOne = 6;
    return numExampleOne;
}
console.log(doMatchEgOne());
console.log(numExampleOne);

console.log('******** Scope example 2 ***********');
var numExampleTwo = 10;
function doMatchEgTwo()
{
    numExampleTwo = 16;
    return numExampleTwo;
}
console.log(doMatchEgTwo());
console.log(numExampleTwo);

console.log('******** Scope example 3 ***********');
var num = 8;
function calculation()
{
    num += 1;
    if(num % 5 === 0){
        return true;
    }
    else {
        return false;
    }
}
num += 1;
console.log(calculation());