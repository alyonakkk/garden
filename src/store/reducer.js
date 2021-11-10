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
  response: "",
  close: false,
};

const shopDataInit = {
  shopData: [],
};

const shopItemInit = {
  shopItem: [],
};

const detailCardInit = {
  detailCard: {},
  detailActiveNav: "information",
};

const shopDataReducer = createReducer(shopDataInit, {
  [setShopData]: (state, action) => {
    state.shopData = action.payload;
  },
});

const shopItemReducer = createReducer(shopItemInit, {
  [setShopItem]: (state, action) => {
    state.shopItem = action.payload;
  },
});

const detailCardReducer = createReducer(detailCardInit, {
  [setDetailCard]: (state, action) => {
    state.detailCard = action.payload;
  },
  [setDetailActiveNav]: (state, action) => {
    state.detailActiveNav = action.payload;
  },
});

const reducer = createReducer(initState, {
  [setClose]: (state, action) => {
    state.close = action.payload;
  },
  [setActiveStore]: (state, action) => {
    state.activeStore = action.payload;
  },
  [setActiveItem]: (state, action) => {
    state.activeItem = action.payload;
  },
  [setOrder]: (state, action) => {
    state.order = action.payload;
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

export { reducer, shopDataReducer, shopItemReducer, detailCardReducer };
