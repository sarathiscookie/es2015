<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Section 7: Get Ready for the Future: ES6 / ES2015</title>
        
        <style>
            .box {
                width: 200px;
                padding: 25px 80px;
                text-align: center;
                font-size: 30px;
                margin-top: 30px;
            }
            
            .green { background-color: green; }
            .blue { background-color: dodgerblue; }
            .orange { background-color: orangered; }
            
        </style>
        
    </head>

    <body>
        <h1>How this keyword works in es5 & 6</h1>
        
        <div class="box green">I'm green!</div>
        <div class="box blue">I'm blue!</div>
        <div class="box orange">I'm orange!</div>

        
        <script>
            // ES5: this keyword in function
            var box1 = {
                color: 'Green',
                position: 1,
                clickMe: function() {
                    var key = this; // Reason for define this:  Event listener function doesn't know this.color and this.position. 
                    document.querySelector('.green').addEventListener('click', function() {
                        var str = 'Clicked on '+key.color+' and position is '+key.position;
                        console.log(str);
                    });
                }
            }

            // ES6: this keyword in function
            const box2 = {
                color: 'blue',
                position: 2,
                clickMe: function() {
                    document.querySelector('.blue').addEventListener('click', () => {
                        const string = 'I have clicked on '+this.color+' and position is '+this.position;
                        console.log(string);
                    });
                }
            }

            // ES6: this keyword in function
            const box3 = {
                color: 'orange',
                position: 3,
                clickMe: function() {
                    document.querySelector('.orange').addEventListener('click', () => {
                        const strings = `I have clicked on ${this.color} and position is ${this.position}`;
                        console.log(strings);
                    });
                }
            }

            box1.clickMe();
            box2.clickMe();
            box3.clickMe();

            // Es5: this keyword in prototype
            // Constructor
            function Person(name) {
                this.name = name;
            }

            var friends = ['Peter', 'Mark', 'Bob', 'Jane'];

            Person.prototype.myFriends = function(friends) {
                var arr = friends.map(function(el){
                    return this.name+ ' friends are '+el;
                }.bind(this));

                console.log(arr);
            };

            new Person('John').myFriends(friends);

            // Es6: this keyword in prototype
            function Vehicle(name) {
                this.name = name;
            }

            const vehicleParts = ['Window', 'Engine', 'Wheels', 'Fuel'];

            Vehicle.prototype.parts = function(vehicleParts) {
                let arr = vehicleParts.map(el => {
                    return `${this.name} parts are ${el}`; 
                });

                console.log(arr);
            }

            new Vehicle('BMW').parts(vehicleParts);

        </script>
    </body>
</html>
