import React from 'react'

function TodoItem({text, completed}) {
  return (
    <li>
    <span>v</span>
    <p>{text} </p>

    <span>X </span>
  </li>
  )
}

export default TodoItem
