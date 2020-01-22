import React from "react";

export function Completed({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "ToggleCompleted",
      payload: todo.id
    });
  };

  return (
      //Returns a line through completed todo item
    <div
      onClick={toggleCompleted}
      className={`todo${todo.completed ? "completed" : ""}`}
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      <h3>Tasks: {todo.item}</h3>
    </div>
  );
}
