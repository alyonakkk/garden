import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducer";

const store = configureStore({
  reducer: reducer,
});

export default store;
