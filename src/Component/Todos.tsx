"use client";

import { useTodos } from "@/store/todos";
import React from "react";

const Todos = () => {
  const { todos , toggleOnChnagedTodos, handleDelete } = useTodos();
  const filterTods = todos;


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
