function prevent () {
	const OBJ_CONST = {
		PI : 3.14
	};

	Object.freeze(OBJ_CONST); //Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

	try{
		OBJ_CONST.PI = 5;
	}
	catch( ex ) {
		console.log(ex);
	}

	return OBJ_CONST.PI;
}

console.log(prevent());

