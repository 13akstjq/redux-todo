import React from "react";
import { Header } from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoLIst";
export default () => {
  return (
    <div>
      <Header text="Header" />
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
};
