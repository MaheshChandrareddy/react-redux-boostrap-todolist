import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from "../action/action-types"

const initialState = [];

export default (state = initialState, action) => {
  // if (action.type === ADD_TODO) {
  //     //to  add todo
  // } else if(action.type === DELETE_TODO){
  //     // to delete  todo
  // } else if (action.type === UPDATE_TODO) {
  //   // to update todo
  // } else {
  //     //return initial state
  // }

  switch (action.type) {
    case ADD_TODO:
      //add todo
      console.log(action.payload)
      return [...state, action.payload];
    case DELETE_TODO:
      //delete todo
      const newState = state.filter(todo => todo.id !== action.payload);
      return newState;
    case UPDATE_TODO:
      //update todo
      const updatedState = state.map(todo => {
        if (todo.id == action.payload.todoId) {
          todo.title = action.payload.todo.title;
          todo.description = action.payload.todo.description;
        }
        return todo;
      });
      return updatedState;
    default:
      return state;
  }
};
