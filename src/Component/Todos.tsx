"use client";

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import React from "react";

const Todos = () => {
  const { todos , toggleOnChnagedTodos, handleDelete } = useTodos();
  const searchParams = useSearchParams();
  const InitialltodosFilter = searchParams.get('todos');
  let filterTods = todos;

  // filtering todo
  if(InitialltodosFilter == "active"){
    filterTods = filterTods.filter((todo)=> !todo.isCompleted)
  }else if(InitialltodosFilter == "completed"){
    filterTods = filterTods.filter((todo)=> todo.isCompleted)
  }else{
    filterTods = todos;
  }

  return (
    <ul>
      {filterTods.map((todo) => {
        return (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted}
                name="" id={`todos-${todo.id}`}
                onChange={()=>toggleOnChnagedTodos(todo.id)}
            />
            <label htmlFor={`todos-${todo.id}`}>{todo.task}</label>

            {
                todo.isCompleted &&
               ( <button onClick={()=>{handleDelete(todo.id)}}>
                    Delete
                </button>)
            }
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
