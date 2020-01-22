import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/TodoReducer";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  // dispatch(
  //     { type: 'MAKE_TODO',
  //     payload: [{
  //         item: '',
  //         completed: false,
  //         id: Date.now()
  //     }]
  // })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          id="todo"
          placeholder={state.item}
          value={newTodo}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
