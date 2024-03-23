import { InputTodo } from "@/Component/InputTodo";
import Todos from "@/Component/Todos";

export default function Home() {
  return (
    <>
      <div>
        <h2>Next JS  + TypeScript TODO</h2>
        <InputTodo />
        <Todos />
      </div>
    </>
  );
}