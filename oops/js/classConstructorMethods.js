class Vehicle {
    constructor (vehicleName, vehicleNumber) {
        this.vehicleName   = vehicleName;
        this.vehicleNumber = vehicleNumber;
        this.increment     = 0;
    }

    vehicleParts() {
        this.engine = '2ltr Petrol Engine';
        return this;
    }

    companyDetails() {
        this.address = 'Kochi';
        return this;
    }
}

let vehicleDataOne = new Vehicle('BENZ', 'KL-07-BW-104');
let vehicleDataTwo = new Vehicle('AUDI', 'KL-07-BZ-107');

console.log(vehicleDataOne.vehicleParts().companyDetails());
console.log(vehicleDataTwo.vehicleParts().companyDetails());