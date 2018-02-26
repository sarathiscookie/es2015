/**
 * Created by php on 01-Feb-18.
 */

/* Checking even or not */
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
var factorial = function fact(num){
    var result = 1;
    for (i = 1; i <= num; i++){
        result *= i;
    }
    return result;
};

console.log(factorial(10));

/* Snake case to camel case */

function letterCase(str)
{
    var converted = str.replace(/-/g, '_');
    return converted;
}

console.log(letterCase('Hello-world'));



