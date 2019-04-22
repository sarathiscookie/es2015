"use strict"	

const APP_VAL = 'es6';
APP_VAL = 'ecmascript 2015'; // Result is "Uncaught TypeError: Assignment to constant variable."
//once a variable is assigned with const, it cannot be reassigned.