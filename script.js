const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
}

function renderTodos() {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = `
      <div class="empty">
        No tasks yet
      </div>
    `;
    return;
  }

  todos.forEach((todo, index) => {

    const item = document.createElement("div");

    item.className = `
      todo-item
      ${todo.completed ? "completed" : ""}
    `;

    item.innerHTML = `
      <div class="todo-left">

        <input
          type="checkbox"
          class="check"
          ${todo.completed ? "checked" : ""}
        />

        <div class="todo-text">
          ${todo.text}
        </div>

      </div>

      <button class="delete-btn">
        ✕
      </button>
    `;

    const checkbox =
      item.querySelector(".check");

    const deleteBtn =
      item.querySelector(".delete-btn");

    checkbox.addEventListener(
      "change",
      () => {

        todos[index].completed =
          !todos[index].completed;

        saveTodos();
        renderTodos();
      }
    );

    deleteBtn.addEventListener(
      "click",
      () => {

        todos.splice(index, 1);

        saveTodos();
        renderTodos();
      }
    );

    todoList.appendChild(item);
  });
}

function addTodo() {

  const text = input.value.trim();

  if (!text) return;

  todos.unshift({
    text,
    completed: false
  });

  saveTodos();
  renderTodos();

  input.value = "";
  input.focus();
}

addBtn.addEventListener(
  "click",
  addTodo
);

input.addEventListener(
  "keydown",
  (e) => {

    if (e.key === "Enter") {
      addTodo();
    }
  }
);

renderTodos();