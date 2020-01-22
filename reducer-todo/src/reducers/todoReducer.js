export const initialState = {
  items: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "Learn about redux",
      completed: false,
      id: 3892987599
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case('ADD_TODO'):
            const newTodo = {
                item: action.payload.item,
                completed: false,
                id: Date.now(),
                due: action.payload.due
            }
            return{
                ...state,
                todos: [...state.todos, newTodo]
            }
    default:
      return state;
  }

};
