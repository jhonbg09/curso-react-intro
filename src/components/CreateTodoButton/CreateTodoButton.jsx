import './CreateTodoButton.css'
import React from 'react'

function CreateTodoButton() {
  return (
    <div>
      <button className='CreateTodoButton' 
      onClick={(event) => { 
        console.log("Le diste click")
        console.log(event)
        }}>
      +
      </button>
    </div>
  )
}

export default CreateTodoButton
