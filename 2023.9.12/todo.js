const todoForm = document.getElementById("frmTodo");
const todoinput = document.querySelector("#frmTodo input");
const todoList = document.getElementById("lstTodo");

function deleteTodo(){
    const li = event.target.parentElement;
    li.remove();
}

function displayTodo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleSubmitTodo(event){
    event.preventDefault();
    const valueTodo = todoinput.value;
    todoinput.value = "";
    displayTodo(valueTodo);
}



todoForm.addEventListener("submit", handleSubmitTodo);