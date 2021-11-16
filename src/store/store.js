import { configureStore } from "@reduxjs/toolkit";
import {
  reducer,
  shopDataReducer,
  shopItemReducer,
  detailCardReducer,
  paymentReducer,
  modalReducer,
  authReducer,
  userReducer,
} from "../store/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  main: reducer,
  stores: shopDataReducer,
  catalog: shopItemReducer,
  card: detailCardReducer,
  payment: paymentReducer,
  modal: modalReducer,
  autorization: authReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
