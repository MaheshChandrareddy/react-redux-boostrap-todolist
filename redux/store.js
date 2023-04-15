// import { createStore, combineReducers }  from "redux"
// import todoReducer from "./reducers/todo-reducer"

// const rootReducer = combineReducers({ todos: todoReducer });

// const store = createStore(rootReducer);

// export default store

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todo-reducer";

const rootReducer = {
  todos: todoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
