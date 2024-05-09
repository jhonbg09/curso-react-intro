import './TodoItem.css'
import React from 'react'

function TodoItem({text, completed}) {
  return (
    <li className='TodoItem'>
    <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>V</span>
    <p className={`TodoItem-p TodoItem-p--complete`}>{text} </p>

    <span className='Icon Icon-delete'>X</span>
  </li>
  )
}

export default TodoItem
