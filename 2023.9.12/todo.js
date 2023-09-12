const todoForm = document.getElementById("frmTodo");
const todoList = document.getElementById("lstTodo");

function handleSubmitTodo(event){
    event.preventDefault();
}

todoForm.addEventListener("submit", handleSubmitTodo);