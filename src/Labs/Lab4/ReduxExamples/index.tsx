import React from "react";
import AddRedux from "./AddRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}
