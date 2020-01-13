var person = {
    name: 'Jane Doe',
    mobile: 9562903203,
    email: 'jane@gmail.com',
    cv: function() {
        var cvContent = 'I am '+this.name+'. I have total 7 years experience';
        return cvContent;
    },
    coverLetter: function() {
        var coverContent = 'My mobile no is '+this.mobile+'. My email id '+this.email;
        return coverContent;
    }
};

console.log(person.coverLetter());
console.log(person.cv());