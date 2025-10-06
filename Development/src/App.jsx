import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from "./Hello"
import LudoBOard from './LudoBoard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LudoBoard />
    </>
  )
}

export default App
