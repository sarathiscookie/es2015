"use strict"

import { elements } from './views/base';
import * as treeView from './views/treeView';

// Create Tree
const treeController = () => {
    // Add loader
    try{

    }
    catch (err) {
        console.log(err);
        // Clear loader
    }

    treeView.rendertrees(1);
}

elements.createTreeForm.addEventListener('submit', e => {
    e.preventDefault();

    // Calling create tree function
    treeController();
});


