class User {

    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age  = age;
    }

    userRole() {
        this.role = 'Guest';
        return this;
    }

    userGender() {
        this.gender = 'Male';
        return this;
    }

}

let userOne = new User('Peter', 'peter@gmail.com', 40);

let userTwo = new User('Jane', 'jane@gmail.com', 30);

//console.log(userOne.userRole().userGender());
//console.log(userTwo.userRole().userGender());

class Admin extends User{

    userRole() {
        this.role = 'Admin';
        return this;
    }

    /* Filtering user arrays and return not matching user emails */
    deleteUser(user) {
        users = users.filter( u => {
            return u.email !== user.email;
        })
    }
}

let userAdmin = new Admin('Doe', 'doe@gmail.com', '25');

let users = [userOne, userTwo, userAdmin];

userAdmin.deleteUser(userTwo);

console.log(users);

console.log(userAdmin.userRole().role);