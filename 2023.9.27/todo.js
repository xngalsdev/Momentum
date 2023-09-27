const todoForm = document.getElementById("frmTodo");
const todoinput = document.querySelector("#frmTodo input");
const todoList = document.getElementById("lstTodo");

const TODOS_KEY = "todos"

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(){
    const li = event.target.parentElement;
    const todoId = parseInt(li.id);
    todos = todos.filter((todo) => todo.id !== todoId);
    saveTodos();
    li.remove();
}

function displayTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
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
    const newTodoObj = {
        text : valueTodo,
        id : Date.now(),
    };
    todos.push(newTodoObj);
    displayTodo(newTodoObj);
    saveTodos();
}



todoForm.addEventListener("submit", handleSubmitTodo);

const savetd = localStorage.getItem(TODOS_KEY)

if (savetd !== null){
    const parseTodos = JSON.parse(savetd);
    todos = parseTodos;
    parseTodos.forEach(displayTodo);
}