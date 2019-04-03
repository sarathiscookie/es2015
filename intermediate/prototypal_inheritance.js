function Person (firstname, lastname, age, email, role)
{
    this.name = {
        firstname,
        lastname
    };
    this.age = age;
    this.email = email;
    this.role = function() {
        return "I am "+role;
    };
}

Person.prototype.greeting = function() {
    return 'I am '+this.name.firstname+' '+this.name.lastname;
};

var newPerson = new Person('Jane', 'Doe', 25, 'jane@gmail.com', 'admin');

console.log(newPerson.greeting());

console.log(newPerson.role());