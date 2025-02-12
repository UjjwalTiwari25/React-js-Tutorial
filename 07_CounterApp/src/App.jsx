import { useState } from 'react'
import './App.css'

function App() {
   const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    setCounter(counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}
export default App
