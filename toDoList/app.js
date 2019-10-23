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

	document.querySelector(DOM.inputButton).addEventListener('click', addList);

	//document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
	
	
}) (ListController, UIController);