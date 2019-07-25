let a = 5, b = 8;

(() => {
    [a,b] = [8, 5];
})();

console.log('A: '+a);
console.log('B: '+b);