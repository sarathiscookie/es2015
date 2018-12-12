var userData = {
  name : 'Doe',
  email : 'doe@gmail.com'
};

userData.mobile = '9999999999';

userData.loggedDate = function() {
  console.log(userData.email + ' last logged on 12.12.2018');
};

console.log(userData.loggedDate());