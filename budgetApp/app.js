//Function for budget
let budgetController = (function() {

	//Constructor for expende
	let Expense = function(id, description, value) {
		this.type = type;
		this.description = description;
		this.value = value;
	};

	//Constructor for income
	let Income = function(id, description, value) {
		this.type = type;
		this.description = description;
		this.value = value;
	};

	//Define strings
	let data = {
		allItems: {
			inc: [],
			exp: []
		},
		totals: {
			inc: 0,
			exp: 0
		}
	}

})();

//Function for UI
let UIController = (function() {

	//Declared dom strings in object
	let DOMStrings = {
		inputType: '.add__type',
		inputDesc: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn'
	}

	//To access public
	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMStrings.inputType).value,
				description: document.querySelector(DOMStrings.inputDesc).value,
				value: document.querySelector(DOMStrings.inputValue).value
			}
		},

		getDOMstrings: function() {
			return DOMStrings;
		} 
	};

})();

//function for combine UI and Budget
let controller = (function(budgetCtrl, UICtrl) {

	let DOM = UICtrl.getDOMstrings();

	//Added event listeners in to a function
	let setupEventListeners = function() {
		document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if(event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	let ctrlAddItem = function() {
		// 1. Get the field input data
		console.log(UICtrl.getInput());
		// 2. Add the item to the budget controller 
		// 3. Add the item to the UI
		// 4. Calculate the budget
		// 5. Display the budget on the UI
	};

	return {
		init: function() {
			console.log('Application has started');
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init();