import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [list, setList] = useState([])

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }

    setList((prev) => [...prev, newDot])
  }

  const handleUndo = (event) => {
    event.stopPropagation()
    
    setList((prev) => {
      if(list.length === 0 ) {
        return
      }
      
      const newArr = [...prev].slice(0, -1)
      return newArr
    })
  }

  return (
    <div id='page' onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      {list.map((item => (
        <span className="dot"
          style={{ left: item.clientX, top: item.clientY }}
        />
      )))}

    </div>
  )
}

export default App