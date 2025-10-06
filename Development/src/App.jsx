import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from "./Hello"
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList />
    </>
  )
}

export default App
