import { useState } from "react";

export default function TodoList() {
  let [todo, setTodo] = useState(["Sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addButton = () => {
    setTodo([...todo, newTodo]);
    setNewTodo(" ");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <>
      <input
        placeholder="...Add task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <br></br>
      <button onClick={addButton}>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Todo List</h4>
      <ul>
        {todo.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
