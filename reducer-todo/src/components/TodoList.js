import React, { useReducer } from "react";
import { reducer, toDoItems } from "../reducers/TodoReducer";
import { Completed } from "../components/Completed";
import { TodoForm } from "../components/TodoForm";

export const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, toDoItems);

  return (
    <div>
      <TodoForm dispatch={dispatch} />
      {state.map(toDo => {
        return <Completed todo={toDo} dispatch={dispatch} key={toDo.id} />;
      })}
    </div>
  );
};
