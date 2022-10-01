import React, { useState } from "react";
import ToDoList from "./ToDo/ToDoList";
function App() {
  const todos = [
    { id: 1, completed: false },
    { id: 2, completed: false },
    { id: 3, completed: false },
    { id: 4, completed: false },
  ];

  return (
    <>
      <h1>Hello world</h1>
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
