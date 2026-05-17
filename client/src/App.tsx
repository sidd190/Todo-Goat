import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

type Todo = {
  _id: string;
  text: string;
  completed: boolean;
};

const API =
  "http://localhost:5000/api/todos";

export default function App() {

  const [todos, setTodos] =
    useState<Todo[]>([]);

  const [input, setInput] =
    useState("");

  async function fetchTodos() {

    const res = await axios.get(API);

    setTodos(res.data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo() {

    if (!input.trim()) return;

    await axios.post(API, {
      text: input
    });

    setInput("");
    fetchTodos();
  }

  async function toggleTodo(id: string) {

    await axios.patch(`${API}/${id}`);

    fetchTodos();
  }

  async function deleteTodo(id: string) {

    await axios.delete(`${API}/${id}`);

    fetchTodos();
  }

  return (
    <div className="app">

      <h1>Level 3 Todo</h1>

      <div className="input-group">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Add todo..."
        />

        <button onClick={addTodo}>
          Add
        </button>

      </div>

      <div className="todos">

        {todos.map(todo => (

          <div
            key={todo._id}
            className="todo"
          >

            <div
              onClick={() =>
                toggleTodo(todo._id)
              }
              style={{
                textDecoration:
                  todo.completed
                    ? "line-through"
                    : "none"
              }}
            >
              {todo.text}
            </div>

            <button
              onClick={() =>
                deleteTodo(todo._id)
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