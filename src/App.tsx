import { useState } from 'react'
import './App.css'
import Home from './components/home'

const App = () => {
  const [text, setText] = useState('Hello');
  const [count, setCount] = useState(0);


  return (
    <>
      <h2 onClick={()=>{
        setCount(count + 1)
        console.log(count)
        setText('Hello World')
      }}>{text} Counter: {count}</h2>
      <h1>Media Library</h1>
      <Home />
    </>

  )
}

export default App
