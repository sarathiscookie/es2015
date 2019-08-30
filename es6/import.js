"use strict";
import { foo, bar } from "./export.js"
import { uppercaseFun, lowercaseFun } from "./string_uppercase.js"
console.log(foo);
console.log(bar);
console.log(uppercaseFun("hello"));
console.log(lowercaseFun("HELLO WORLD"));