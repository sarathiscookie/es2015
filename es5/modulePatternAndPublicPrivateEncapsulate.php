<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<script>
		let budgetController = (function() {
			let x = 5;
			let add = function(a) { //private or encapsulate
				return x + a;
			}

			return {
				publicTest: function(b) { //public can access
					return add(b);
				}
			}
		})();

		let UIController = (function() {

			// some code
			
		})();

		let controller = (function(budgetCtrl, UICtrl) {

			return{
				anotherPublicTest: function(c) { // public can access
					return budgetCtrl.publicTest(c);
				}
			}

		})(budgetController, UIController);

		console.log(controller.anotherPublicTest(66));
	</script>
</body>
</html>