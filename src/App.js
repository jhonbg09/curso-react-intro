import "./App.css";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton /> */}
    </div>
  );
}


function TodoItem() {
  return (
    <li>
      <span>v</span>
      <p>Llorar con la llorona</p>
      <span>X </span>
    </li>
  );
}

export default App;
