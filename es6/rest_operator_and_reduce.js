const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = (...arg) => {
  return arg.reduce(reducer);
}

console.log(sum(1,2,4,5));