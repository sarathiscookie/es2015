'use strict';

let ListController = (function() {

	let toDoItem = function(toDoTxt) {
		this.toDoTxt = toDoTxt;
	};

	return {
		addToDoItem: function(txt) {
			let toDoNewTxt;

			if(txt != '') {
				toDoNewTxt = new toDoItem(txt);
			}
			else {
				toDoNewTxt = new toDoItem('Please fill something!!!');
			}

			return toDoNewTxt;
		}
	}
	
})();

let UIController = (function() {

	let DOMstrings = {
		inputToDO: '.todo',
		inputButton: '.todosubmit',
		listGroup: '.list-group',
		listGroupItem: '.list-group-item',
		buttonRemove: '.remove',
	};

	return {
		getInput: function() {
			return {
				toDo: document.querySelector(DOMstrings.inputToDO).value
			}
		},
		addToDoList: function(obj, id) {
			let html, newHtml;

			html    = `<li class="list-group-item item_count_%todoid%" id="list-1"><input class="form-check-input" type="checkbox"> %todotxt% <button type="button" class="btn btn-sm btn-primary remove">Remove</button></li>`;

            newHtml = html.replace("%todotxt%", obj.toDoTxt);
            newHtml = newHtml.replace("%todoid%", id);

            document.querySelector(DOMstrings.listGroup).insertAdjacentHTML('beforeend', newHtml);
		},
		getDOMStrings: function() {
			return DOMstrings;
		}
	};
	
}) ();

let controller = (function(listCTRL, uiCTRL) {

	let id = 0;

	let DOM = uiCTRL.getDOMStrings();

	let addList = function() {
		let input, newToDoList;

		input       = uiCTRL.getInput();
		newToDoList = listCTRL.addToDoItem(input.toDo);
		id += 1;

		uiCTRL.addToDoList(newToDoList, id);
	};

    let eventListener = function() {
    	document.querySelector(DOM.inputButton).addEventListener('click', addList);
    	//document.querySelector(DOM.buttonRemove).parentNode.removeChild(document.querySelector(listGroupItem));
    };

    return {
    	init: function() {
    		console.log('Application started');
    		return eventListener();
    	}
    };
		
}) (ListController, UIController);

controller.init();