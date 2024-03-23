"use client";
//AddTodo
import { FormEvent, useState } from "react";
import { useTodos } from "@/store/todos";

export const InputTodo = () => {
  const [todo, setTodo] = useState<string>("");

const {handleAddTodo} = useTodos(); // get from store;

  const handleFormSUbmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("")
  };

  return (
    <div>
      <form onSubmit={handleFormSUbmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo as string}
          type="text"
          name=""
          placeholder="Write Your Todo"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};
