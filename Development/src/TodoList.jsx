import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);    //Define objects in array
  let [newTodo, setNewTodo] = useState("");

  let addButton = () => {
    setTodo([...todo, { task: newTodo, id: uuidv4(), isDone: false}]);   //Spread todo
    setNewTodo(" ");
  };                               

  let updateTodoValue = (event) => {            //event object use only target property
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo((prevTodo) => todo.filter((prevTodo) => prevTodo.id != id)); // callback function and Also filter fuction to filter todo list
  };

  let markAllDone = () => {
    setTodo((prevTask) =>                  
      prevTask.map((todo) => {                //map method to update Array
        return {
          ...todo,                           // Spread (same as prevoius Todo)
          isDone: true,
        };
      })
    );
  };

 let markAsDone = (id) => {   // no use callback function
  setTodo((todo) =>
    todo.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          isDone: true,
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
              <span style={todo.isDone ? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>     {/*arrow function call beacuse user click then run*/}
            </li>
          )
        )}
      </ul>
      <br></br>
      <button onClick={markAllDone}>Mark All As Done</button>
    </>
  );
}
