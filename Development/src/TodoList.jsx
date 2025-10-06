import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todo, setTodo] = useState([{task: "Sample Task", id: uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addButton = () => {
    setTodo([...todo, {task: newTodo, id: uuidv4()}]);
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
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}
