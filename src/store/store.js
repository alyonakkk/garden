import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../store/reducer";
import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//   main: reducer,
//   shop: shopReducer,
// });

const store = configureStore({
  reducer: reducer,
});

export default store;
