"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export type TodoItem = {
  id: string;
  task: string;
  isCompleted: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: TodoItem[];
  handleAddTodo: (task: string) => void; //call signatuer
  toggleOnChnagedTodos: (task: string) => void;
  handleDelete: (id: string) => void;
};

// Lets you create a Context that components can provide or read.
export const todoContext = createContext<TodosContext | null>(null);

//provider -> it share data
export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function handleAddTodo(task: string) {
    // it ensures that the newTodos variable is declared and initialized before returning it.
    setTodos((prev) => {
      // we will create a new array
      const newTodos: TodoItem[] = [
        {
          id: Math.random().toString(),
          task,
          isCompleted: false,
          createdAt: new Date()
        },
        ...prev
      ];
      console.log(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  // if the task is completed
  const toggleOnChnagedTodos = (id: string) => {
    setTodos((prev: TodoItem[]) => {
      const newTodos = prev.map((task: TodoItem) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      return newTodos;
    });
  };
  const handleDelete = (id: String) => {
    setTodos((prev: TodoItem[]) => {
      const newTodos = prev.filter((task: TodoItem[]) => task.id != id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todoContext.Provider
      value={{ todos, handleAddTodo, toggleOnChnagedTodos, handleDelete }}
    >
      {children}
    </todoContext.Provider>
  );
};

// context api hook
export function useTodos() {
  const todosContextValue = useContext(todoContext);
  if (!todosContextValue) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  console.log("todosContextValue", todosContextValue);
  return todosContextValue;
}
