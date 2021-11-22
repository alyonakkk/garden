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
} from "./reducer";

const store = configureStore({
  reducer: {
    main: reducer,
    stores: shopDataReducer,
    catalog: shopItemReducer,
    card: detailCardReducer,
    payment: paymentReducer,
    modal: modalReducer,
    autorization: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
