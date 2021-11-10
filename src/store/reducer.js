import { createReducer } from "@reduxjs/toolkit";
import {
  setShopData,
  setClose,
  setActiveStore,
  setActiveItem,
  setShopItem,
  setOrder,
  setDetailCard,
  setDetailActiveNav,
  setModification,
  setActivePayment,
  setOrderTotal,
  setResponse,
  setActiveModal,
} from "./actions";

const initState = {
  shopData: [],
  shopItem: [],
  detailCard: {},
  order: [],
  modification: {},
  orderTotal: {
    place: null,
    time: null,
    comment: "",
  },
  activeStore: "",
  activeItem: "",
  activePayment: false,
  activeModal: false,
  detailActiveNav: "information",
  response: "",
  close: false,
};

const reducer = createReducer(initState, {
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
  [setDetailActiveNav]: (state, action) => {
    state.detailActiveNav = action.payload;
  },
  [setModification]: (state, action) => {
    state.modification = action.payload;
  },
  [setActivePayment]: (state, action) => {
    state.activePayment = action.payload;
  },
  [setOrderTotal]: (state, action) => {
    state.orderTotal = action.payload;
  },
  [setResponse]: (state, action) => {
    state.response = action.payload;
  },
  [setActiveModal]: (state, action) => {
    state.activeModal = action.payload;
  },
});

export { reducer };
