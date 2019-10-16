//Function for budget
let budgetController = (function() {

	//Constructor for expende
	let Expense = function(type, description, value) {
		this.type = type;
		this.description = description;
		this.value = value;
	};

	//Constructor for income
	let Income = function(type, description, value) {
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
	};

	return {
		addItem: function(type, des, val) {

			let newItem;
		
            //Create new item based on exp or inc type 
			if(type === 'exp') {
				newItem = new Expense(type, des, val);
			} else if(type === 'inc') {
				newItem = new Income(type, des, val);
			}

            //Push in to new item
			data.allItems[type].push(newItem);

			return newItem;
		},
		testing: function() {
			console.log(data);
		}
	};


})();

//Function for UI
let UIController = (function() {

	//Declared dom strings in object
	let DOMStrings = {
		inputType: '.add__type',
		inputDesc: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn',
		incomeList: '.income__list',
		expensesList: '.expenses__list',
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

		addListItem: function(obj, type) {

			let html, newHtml, element;

			// Create HTMl string with placeholder text 
			if(type === 'exp') {
				element = DOMStrings.expensesList;

				html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div>'+
			'<div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div>'+
			'<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i>'+
			'</button></div></div></div>';
			} 
			else if(type === 'inc') {
				element = DOMStrings.incomeList;

				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div>'+
                            '<div class="right clearfix"><div class="item__value">%value%</div>'+
                            '<div class="item__delete"><button class="item__delete--btn">'+
                            '<i class="ion-ios-close-outline"></i></button></div></div></div>';
			}
			
			// Replace the placeholder with the actual data
			newHtml = html.replace("%id%", 1);
			newHtml = newHtml.replace("%description%", obj.description);
			newHtml = newHtml.replace("%value%", obj.value);

			// Insert the HTML in to the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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

		let input, newItem;
		// 1. Get the field input data
		input = UICtrl.getInput();
		// 2. Add the item to the budget controller
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);
		// 3. Add the item to the UI
		UICtrl.addListItem(newItem, input.type);
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