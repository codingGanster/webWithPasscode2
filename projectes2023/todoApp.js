const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        addTodoItem(todoText);
        todoInput.value = "";
    }
});

function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const todoTextSpan = document.createElement("span");
    const deleteButton = document.createElement("button");

    todoTextSpan.textContent = todoText;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function() {
        todoItem.remove();
    });

    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}