let BudgetCalculationController = (function() {

	//

})();

let UIController = (function() {

	let classNames = {
		typeClass: '.add__type',
		descriptionClass: '.add__description',
		valueClass: '.add__value',
		button: '.add__btn'
	};

	return {
		getInputs: function() {
			return {
				type: document.querySelector(classNames.typeClass).value,
				description: document.querySelector(classNames.descriptionClass).value,
				value: document.querySelector(classNames.valueClass).value
			};
		},

		getClassNames: function() {
			return classNames;
		}
	};
	

})();

let controller = (function(UICtrl, BudgetCalCtrl) {

	let DOM = UICtrl.getClassNames();

	let catchInputs = function() {

		let input;
		input = UICtrl.getInputs();

	};

	let eventListenerFun = function() {
		document.querySelector(DOM.button).addEventListener('click', catchInputs);

		document.addEventListener('keypress', function(event) {
			if(event.keyCode === 13 || event.which === 13) {
				console.log('Enter key pressed');
				catchInputs();
			}
		});
	};
	
	return {
		init: function() {
			console.log('Project started');
			eventListenerFun();
		}
	};
})(UIController, BudgetCalculationController);

controller.init();