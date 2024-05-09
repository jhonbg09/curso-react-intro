import './TodoCounter.css';
function TodoCounter({total, completed}) {
  return <h1 className='TodoCounter'>
  Has competado <span>{completed}</span> de <span>{total}</span> todos.
  </h1>;
}

export default TodoCounter;
