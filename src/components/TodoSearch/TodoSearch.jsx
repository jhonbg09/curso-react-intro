import './TodoSearch.css'
import React from "react";

function TodoSearch({searchValue, setSearchValue}) {
  
  return (
    <input
      placeholder="Buscar...." 
      className="TodoSearch" 
      value={searchValue}
      onChange={(event)=>{
        console.log('Funciona el search');
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }}/>
  )
  
}

export default TodoSearch;
