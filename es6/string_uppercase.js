"use strict";
let uppercase;
let lowercase;
export function uppercaseFun(str) {
	uppercase = str.toUpperCase();
	return uppercase;
}

export function lowercaseFun(str) {
	lowercase = str.toLowerCase();
	return lowercase;
}