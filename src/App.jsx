import { useState } from 'react'
import './App.css'
import useStorage from './Hooks/useStorage'

function App() {
  const cssStyling = {width:'60%',height:'40px',padding:'4px 10px', fontSize:'20px'}
  const [storedValue,setStorage] = useStorage("storageKey","");
  const [userInput,setUserInput] =useState(storedValue)
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value)
    setStorage(e.target.value);
  }
  return (
    <>
      <h1>Learning Custom hooks</h1>
      <input 
        type="text" 
        placeholder='What is on your mind' 
        style={cssStyling}
        value={userInput}
        onChange={handleChange}
        />
    </>
  )
}

export default App
