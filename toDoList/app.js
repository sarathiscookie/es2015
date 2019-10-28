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
		listGroup: '.list-group'
	};

	return {
		getInput: function() {
			return {
				toDo: document.querySelector(DOMstrings.inputToDO).value
			}
		},
		addToDoList: function(obj) {
			let html, newHtml;

			html    = `<li class="list-group-item" id="list-1"><input class="form-check-input" type="checkbox"> %todotxt% <span> &#10060; </span></li>`;

            newHtml = html.replace("%todotxt%", obj.toDoTxt);

            document.querySelector(DOMstrings.listGroup).insertAdjacentHTML('beforeend', newHtml);
		},
		getDOMStrings: function() {
			return DOMstrings;
		}
	};
	
}) ();

let controller = (function(listCTRL, uiCTRL) {

	let DOM = uiCTRL.getDOMStrings();

	let addList = function() {
		let input, newToDoList;

		input       = uiCTRL.getInput();
		newToDoList = listCTRL.addToDoItem(input.toDo);
		
		uiCTRL.addToDoList(newToDoList);
	};

    let eventListener = function() {
    	document.querySelector(DOM.inputButton).addEventListener('click', addList);
    };

    return {
    	init: function() {
    		console.log('Application started');
    		return eventListener();
    	}
    };
		
}) (ListController, UIController);

controller.init();