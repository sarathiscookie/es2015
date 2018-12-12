var userDetails = {
    name: 'Jane',
    email: 'jane@gmail.com',
    address: 'kochi',
    login(){
        console.log(this.email + ' User logged in');
    },
    logout(){
        console.log(this.email + ' User logged out');
    }
};

console.log(userDetails.login());
console.log(userDetails.logout());