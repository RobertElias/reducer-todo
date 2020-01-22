export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          },
          {
            item: 'Learn about redux',
            completed: false,
            id: 3892987599
          }
          
          
    ]

}

export const reducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }

}