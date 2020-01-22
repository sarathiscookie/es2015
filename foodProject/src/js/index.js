import src from './models/Search';
//import { add, mul, id } from './views/searchView'; // Import separately
import * as searchView from './views/searchView'; // Import all

console.log(src);
console.log(`Imported functions! Addition: ${searchView.add(searchView.id, 2)} and Multiplication: ${searchView.mul(searchView.id, 2)}.`);
