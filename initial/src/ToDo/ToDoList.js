import React from "react";
import ToDoItem from "./ToDoItem";
export default function ToDoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <ToDoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}
