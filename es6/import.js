"use strict";
import { foo, bar } from "./export.js"
import { uppercaseFun } from "./string_uppercase.js"
console.log(foo);
console.log(bar);
console.log(uppercaseFun("hello"));