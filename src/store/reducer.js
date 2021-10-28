import { createReducer } from "@reduxjs/toolkit";
import {
  setShopData,
  setClose,
  setActiveStore,
  setActiveItem,
  setShopItem,
  setOrder,
  setDetailCard,
} from "./actions";

const initState = {
  shopData: [],
  shopItem: [],
  close: false,
  activeStore: "",
  activeItem: "",
  // storeList: {
  //   shopData: [],
  //   shopItem: [],
  //   close: false,
  //   activeStore: "",
  // },
  order: [],
  detailCard: [],
};

export default createReducer(initState, {
  [setShopData]: (state, action) => {
    state.shopData = action.payload;
  },
  [setClose]: (state, action) => {
    state.close = action.payload;
  },
  [setActiveStore]: (state, action) => {
    state.activeStore = action.payload;
  },
  [setActiveItem]: (state, action) => {
    state.activeItem = action.payload;
  },
  [setShopItem]: (state, action) => {
    state.shopItem = action.payload;
  },
  [setOrder]: (state, action) => {
    state.order = action.payload;
  },
  [setDetailCard]: (state, action) => {
    state.detailCard = action.payload;
  },
});
