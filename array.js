/**
 * Created by php on 27-Mar-18.
 */

/* Array push and pop begin */
function arrayPush(data)
{
    var arr = ['red', 'green', 'yellow'];
    var pushedData = arr.push(data); // Add data in to end of array and return length if return "pushedData"
    return arr;
}

console.log('******** Array add and remove data from the end of array ********');
console.log(arrayPush('violet'));

function arrayPop()
{
    var arr = ['red', 'green', 'yellow', 'violet'];
    var pushedData = arr.pop(); // Remove data from the end of array
    return arr;
}

console.log(arrayPop());
/* Array push and pop end */

/* Array unshift and shift begin */
console.log('******** Array add and remove data from the beginning of array ********');

var arrayUnshift = function unShift() {
    var arr = ['red', 'green', 'violet'];
    var unshifted = arr.unshift('yellow');
    return arr;
};

console.log(arrayUnshift());

function arrayShift()
{
    var arr = ['yellow', 'red', 'green', 'violet'];
    var shifted = arr.shift();
    return arr;
}

console.log(arrayShift());
/* Array unshift and shift end */

/* IndexOf */

console.log('******** Index of array ********');

function indexOfArray()
{
    var arr = ['jay', 'peter', 'jane', 'peter', 'maria']; // Here peter is two times but index of took first value of peter
    var indexed = arr.indexOf('peter');
    return indexed;
}

console.log(indexOfArray());

/* Slice */

console.log('******** Slice an array ********');

function sliceArray()
{
    var arr = [121, 131, 'jane', 'peter', 151, 161];
    var indexed = arr.slice(2, 4); //2 starting point and 4 ending point
    return indexed;
}

console.log(sliceArray());

/* Length of array */
console.log('******** Length of array ********');

var array = [12, 13, 14, 15, 16, 17];
console.log(array.length);