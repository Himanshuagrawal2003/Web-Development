import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Form from "./Form";
import Counter from './Counter'

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
