"use strict"

import { elements } from './views/base';

/* Create tree */
console.log(elements);
elements.createTreeForm.addEventListener('submit', e => {
    e.preventDefault();

    console.warn('clicked');
    
});