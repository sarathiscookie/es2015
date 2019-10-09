//Function for budget
let budgetController = (function() {

	//some code

})();

//Function for UI
let UIController = (function() {

	let DOMStrings = {
		inputType: '.add__type',
		inputDesc: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn'
	}

	return {
		getInput: function() {
			return {
				type: document.querySelector('.add__type').value,
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value,
			}
		},

		getDOMstrings: function() {
			return DOMStrings;
		}
	}
	
})();

//function for combine UI and Budget
let controller = (function(budgetCtrl, UICtrl) {

	//console.log(UICtrl.getDOMstrings());

	let ctrlAddItem = function() {
		// 1. Get the field input data
		console.log(UICtrl.getInput());
		// 2. Add the item to the budget controller 
		// 3. Add the item to the UI
		// 4. Calculate the budget
		// 5. Display the budget on the UI
	};
	

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if(event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});


})(budgetController, UIController);
