var todos = [{
    done: true,
    todo: "Learn HTML",
}, {
    done: false,
    todo: "Learn CSS",
    
}, {
    done: false, 
    todo: "Learn JavaScript",
    
}];

var todoList = document.getElementById("list");

var render = function(){
    var template = "";
    for(var x = 0; x < todos.length; x++){
        var checked = "";
        if(todos[x].done){
            checked = "checked";
        }

        template = template + 
                    "<li><input id='" + x + 
                    "' type='checkbox' " + 
                    checked + ">" + todos[x].todo + " </li>"
    }
    todoList.innerHTML = template;
}

var displayCounter = function() {
    var todoCounter = document.getElementById("counter");
    var counter = todos.length;
    todoCounter.innerHTML = counter;
}

var addtask = document.getElementById("addtask");
addtask.addEventListener("click", function(){
    var newtask = prompt("Add task!", "")
    if(newtask){
        todos.push({
            done: false,
            todo: newtask,
        });
    }
    render();
    displayCounter();
});

render();
displayCounter();