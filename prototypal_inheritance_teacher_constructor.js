function Person(firstname, lastname, email, mobile, role, address, city, state, pincode)
{
    this.name = {
        firstname,
        lastname
    };
    this.email = email;
    this.mobile = mobile;
    this.role = function() {
        return 'My role is '+role;
    };
    this.address = {
        address,
        city,
        state,
        pincode
    };
}

Person.prototype.greetings = function(){
    return 'My name is '+this.name.firstname+' '+this.name.lastname+'. My address is '+this.address.address+' '+this.address.city+' '+this.address.state+' '+this.address.pincode;
};

function Teacher(firstname, lastname, email, mobile, role, address, city, state, pincode, subject) {
    Person.call(this, firstname, lastname, email, mobile, role, address, city, state, pincode);
    this.subject = subject;
}


var newUser = new Person('Jane', 'Doe', 'jane@gmail.com', 1313213123, 'admin', 'house no 212', 'kochi', 'kerala', 690572);
var teacher = new Teacher('Peter', 'Bradly', 'peter@gmail.com', 235689, 'teacher', 'house no 39', 'kochi', 'kerala', 682026, 'English');

console.log(newUser.role());
console.log(teacher.role());