import React from 'react';
import { useState } from 'react';
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";

const TodoDefault = [
  {
    id: 1,
    text: "tarea 1",
    completed: true,
  },

  {
    id: 2,
    text: "tarea 2",
    completed: false,
  },

  {
    id: 3,
    text: "tarea 3",
    completed: false,
  },

  {
    id: 4,
    text: "tarea 4",
    completed: false,
  },
];

function App() {
  const[searchValue, setSearchValue ] = useState('')
  return (
    <div className="App">
      <TodoCounter completed={16} total={25} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList className='TodoList'>
        {TodoDefault.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
