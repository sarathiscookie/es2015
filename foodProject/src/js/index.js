import src from './models/Search';
import { add, mul, id } from './views/searchView';

console.log(src);
console.log(`Imported functions! Addition: ${add(id, 2)} and Multiplication: ${mul(id, 2)}.`);