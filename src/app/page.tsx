import { InputTodo } from "@/Component/InputTodo";
import Todos from "@/Component/Todos";
import NavBar from "@/Component/navBar";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-full">
        <h1 className="h-10 text-4xl text-bold">Next JS  + TypeScript TODO</h1>
        <InputTodo />
        <NavBar />
        <Todos />
      </div>
    </>
  );
}