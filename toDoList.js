/**
 * Created by php on 02-Apr-18.
 */

var todos = [];

var input = prompt("What would you to do?");

while(input !== 'quit')
{
    if(input === "list") {
        listTodo();
    }
    else if(input === "delete") {
        delTodo();
    }
    else if(input === "new") {
        addTodo();
    }

    input = prompt("What would you to do?");
}

console.log("Quit from the app");

function listTodo()
{
    console.log("Todo list");
    console.log("**********");
    todos.forEach(function(key, item){
        console.log(key+" : "+item);
    });
    console.log("**********");
}

function addTodo()
{
    var newTodos = prompt("Do you want to add new item?");
    todos.push(newTodos);
    console.log("Created new todo");
}

function delTodo()
{
    var deleteTodo = prompt("Do you want to delete new item?");
    todos.splice(deleteTodo, 1);
    console.log("Deleted from the list");
}
/*
* var usa       = prompt("What is the capital of USA?");
 var india     = prompt("What is the capital of INDIA?");
 var germany   = prompt("What is the capital of GERMANY?");
 var australia = prompt("What is the capital of AUSTRALIA?");

 var input = [usa, india, germany, australia];
 var result = [];
 for(var i in input)
 {
 result.push(input[i]);
 }
 console.log(result);*/