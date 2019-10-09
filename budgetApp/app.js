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

	console.log(UICtrl.getInput());
	console.log(UICtrl.getDOMstrings());


})(budgetController, UIController);
