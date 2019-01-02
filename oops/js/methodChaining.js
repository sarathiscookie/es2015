class MethodChaining {

    constructor(name, age, contact) {
        this.name = name;
        this.age = age;
        this.contact = contact;
    }

    employeeDetails() {
        this.designation = 'Employee';
        return this;
    }

    guestDetails() {
        this.designation = 'Guest';
        return this;
    }

    companyDetails() {
        this.company = 'ABC';
        return this;
    }
}

let employee = new MethodChaining('Jane', 25, 9876789098);
let guests   = new MethodChaining('Peter', 45, 9999989098);

let employeeDetails = 'Company '+employee.companyDetails().company+'. Employee Details - '+employee.employeeDetails().designation+', Name: '+employee.name;
let guestsDetails   = 'Company '+guests.companyDetails().company+'. Guests Details - '+guests.guestDetails().designation+', Name: '+guests.name;

console.log(employeeDetails);
console.log(guestsDetails);