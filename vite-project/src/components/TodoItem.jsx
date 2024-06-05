import React, { useContext } from "react";
import { TodoContext } from "../App";
import "./../App.css";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.todoItem} className="container-todo">
      <div className="checkbox-wrapper-44">
        <label className="toggleButton">
          <input
            type="checkbox"
            style={styles.checkbox}
            onChange={() => toggleCompleted(todo.id)}
            className="checkbox"
          />
          <div>
            <svg viewBox="0 0 44 44">
              <path
                d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758"
                transform="translate(-2.000000, -2.000000)"
              ></path>
            </svg>
          </div>
        </label>
      </div>

      <p style={getTodoTitleStyle()} className="todo-title">
        {todo.title}
      </p>
      <button
        style={styles.button}
        onClick={() => deleteTodo(todo.id)}
        className="remove"
      >
        Delete
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    fontSize: "24px",
    // Tambahkan styles di bawah ini
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Tambahkan styles di bawah ini
  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },
  // button: {
  //   backgroundColor: "#BB0000",
  //   // color: "#fff",
  //   height: "30px",
  //   width: "30px",
  //   borderRadius: "100%",
  //   border: "none",
  //   cursor: "pointer",
  //   fontSize: "16px",
  // },
};
export default TodoItem;
