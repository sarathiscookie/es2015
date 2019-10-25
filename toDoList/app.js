let ListController = (function() {

	//CODE
	
})();

let UIController = (function() {

	let DOMstrings = {
		inputToDO: '.todo',
		inputButton: '.todosubmit'
	};

	return {
		getInput: function() {
			return {
				toDo: document.querySelector(DOMstrings.inputToDO).value
			}
		},
		getDOMStrings: function() {
			return DOMstrings;
		}
	};
	
}) ();

let controller = (function(listCTRL, uiCTRL) {

	let DOM = uiCTRL.getDOMStrings();

	let addList = function() {
		let input;
		input = uiCTRL.getInput();
		console.log(input.toDo);
	};

    let eventListener = function() {
    	document.querySelector(DOM.inputButton).addEventListener('click', addList);
    };

    return {
    	init: function() {
    		console.log('Application started');
    		return eventListener();
    	}
    }
		
}) (ListController, UIController);

controller.init();