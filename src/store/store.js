import { configureStore } from "@reduxjs/toolkit";
import {
  reducer,
  shopDataReducer,
  shopItemReducer,
  detailCardReducer,
} from "../store/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  main: reducer,
  stores: shopDataReducer,
  catalog: shopItemReducer,
  card: detailCardReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
