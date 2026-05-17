import { useEffect, useState } from "react";



type Todo = {
  id:string;
  text : string;
  completed : boolean;
}

export default function App(){
  const [todos, setTodos] = useState<Todo[]>(()=>{
    const saved = localStorage.getItem("todos");
    return saved? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState<string>("");

  useEffect(()=>{
    localStorage.setItem("react-ts-todos", JSON.stringify(todos));
  }, [todos]);
  
  function addTodo(): void {
    if(!input.trim()) return;
    const newTodo : Todo = {
      id : crypto.randomUUID(),
      text: input,
      completed: false
    };

    setTodos([newTodo, ...todos]);
    setInput("");
  }

  function toggleTodo(id: string): void {

    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed:
                !todo.completed
            }
          : todo
      )
    );
  }

  function deleteTodo(id: string): void {

    setTodos(
      todos.filter(
        todo => todo.id !== id
      )
    );
  }
  return (
    <div className="app">

      <h1 className="title">
        React<span>Task</span>
      </h1>

      <div className="input-group">

        <input
          type="text"
          value={input}
          placeholder="Add a task..."
          className="todo-input"
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />

        <button
          className="add-btn"
          onClick={addTodo}
        >
          Add
        </button>

      </div>

      <div className="todo-list">

        {todos.length === 0 && (
          <div className="empty">
            No tasks yet ✨
          </div>
        )}

        {todos.map(todo => (

          <div
            key={todo.id}
            className={`todo-item ${
              todo.completed
                ? "completed"
                : ""
            }`}
          >

            <div className="todo-left">

              <input
                type="checkbox"
                checked={todo.completed}
                className="check"
                onChange={() =>
                  toggleTodo(todo.id)
                }
              />

              <p className="todo-text">
                {todo.text}
              </p>

            </div>

            <button
              className="delete-btn"
              onClick={() =>
                deleteTodo(todo.id)
              }
            >
              ✕
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}