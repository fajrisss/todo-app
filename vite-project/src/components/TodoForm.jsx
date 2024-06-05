import React, { useState } from "react";
import "./../App.css";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  console.log(title);

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title}
          className="input-form"
        />
        <button style={styles.button} className="button-form">Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  // container: {
  //   marginBottom: "32px",
  // },
  // formInput: {
  //   height: "66px",
  //   width: "40%",
  //   fontSize: "16px",
  //   padding: "0 16px",
  // },
  // button: {
  //   height: "72px",
  //   fontSize: "16px",
  // },
};

export default TodoForm;
