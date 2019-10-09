//Function for budget
let budgetController = (function() {

	//some code

})();

//Function for UI
let UIController = (function() {

	return {
		getInput: function() {
			return {
				type: document.querySelector('.add__type').value,
				description: document.querySelector('.add__description').value,
				value: document.querySelector('.add__value').value,
			}
		}
	}
	
})();

//function for combine UI and Budget
let controller = (function(budgetCtrl, UICtrl) {

	console.log(UICtrl.getInput());

})(budgetController, UIController);
