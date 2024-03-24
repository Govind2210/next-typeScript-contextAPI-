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
        className="bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
