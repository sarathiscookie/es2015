/**
 * Created by php on 02-Apr-18.
 */

var todos = [];

var input = prompt("What would you to do?");

while(input !== 'quit')
{
    if(input === "list") {
        console.log(todos);
    }
    else if(input === "new") {
        var newTodos = prompt("Do you want to add new item?");
        todos.push(newTodos);
    }

    input = prompt("What would you to do?");
}

console.log("Quit from the app");

