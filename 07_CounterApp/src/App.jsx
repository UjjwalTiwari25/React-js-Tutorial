import { useState } from 'react'
import './App.css'

function App() {
   const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      alert("Counter cannot exceed 20!")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("Counter cannot go below 0!")
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
