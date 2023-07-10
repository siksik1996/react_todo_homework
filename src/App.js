import { nanoid } from "nanoid";
import "./App.css";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: nanoid(), content: "밥먹기", likes: 0 },
    { id: nanoid(), content: "다이어트하기", likes: 0 },
    { id: nanoid(), content: "과제하기", likes: 0 },
    { id: nanoid(), content: "공부하기", likes: 0 },
  ]);

  const handleLike = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, likes: todo.likes + 1 };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((likeUp) => {
      return likeUp.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />

      <button
        onClick={() => {
          const newList = { id: nanoid(), content: newTodo, likes: 0 };
          setTodos([...todos, newList]);
          setNewTodo("");
        }}
      >
        입력
      </button>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.content}</span>
            <button onClick={() => handleLike(todo.id)}>👍{todo.likes}</button>
            <button onClick={() => handleDelete(todo.id)}>🗑</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
