import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = useState([{ task: "Sample Task", id: uuidv4() }]); //Define objects in array
  let [newTodo, setNewTodo] = useState("");

  let addButton = () => {
    setTodo([...todo, { task: newTodo, id: uuidv4() }]); //Spread todo
    setNewTodo(" ");
  };

  let updateTodoValue = (event) => {
    //event object use only targent property
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo((prevTodo) => todo.filter((prevTodo) => prevTodo.id != id)); // callback function and Also filter fuction to filter todo list
  };

  let upperCaseAll = () => {
    setTodo((prevTask) =>
      prevTask.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
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
        {todo.map(
          (
            todo //map function for render
          ) => (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        )}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </>
  );
}
