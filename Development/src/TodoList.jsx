import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = useState([{ task: "Sample Task", id: uuidv4() }]);    //Define objects in array
  let [newTodo, setNewTodo] = useState("");

  let addButton = () => {
    setTodo([...todo, { task: newTodo, id: uuidv4() }]);   //Spread todo
    setNewTodo(" ");
  };

  let updateTodoValue = (event) => {            //event object use only target property
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo((prevTodo) => todo.filter((prevTodo) => prevTodo.id != id)); // callback function and Also filter fuction to filter todo list
  };

  let upperCaseAll = () => {
    setTodo((prevTask) =>                  
      prevTask.map((todo) => {                //map method to update Array
        return {
          ...todo,                           // Spread (same as prevoius Todo)
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

 let upperCaseOne = (id) => {   // no use callback function
  setTodo((todo) =>
    todo.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      } else {
        return todo;
      }
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
        {todo.map(              //map function for render
          (
            todo 
          ) => (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>     {/*arrow function call beacuse user click then run*/}
            </li>
          )
        )}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </>
  );
}
