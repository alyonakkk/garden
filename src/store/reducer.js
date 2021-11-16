import { createReducer } from "@reduxjs/toolkit";
import {
  setShopData,
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
  setAuth,
  setAutorizationActive,
  setUserName,
  setUserPhone,
} from "./actions";

const initState = {
  order: [],
  modification: {},
  orderTotal: {
    place: null,
    time: null,
    comment: "",
  },
};

const shopDataInit = {
  shopData: [],
  activeStore: "",
};

const shopItemInit = {
  shopItem: [],
  activeItem: "",
};

const detailCardInit = {
  detailCard: {},
  detailActiveNav: "information",
};

const paymentInit = {
  activePayment: false,
};

const modalInit = {
  activeModal: false,
  response: "",
};

const authInit = {
  auth: false,
  autorizationActive: "phone",
};

const userInit = {
  name: "Коти Старк",
  phone: 0,
};

const shopDataReducer = createReducer(shopDataInit, {
  [setShopData]: (state, action) => {
    state.shopData = action.payload;
  },
  [setActiveStore]: (state, action) => {
    state.activeStore = action.payload;
  },
});

const shopItemReducer = createReducer(shopItemInit, {
  [setShopItem]: (state, action) => {
    state.shopItem = action.payload;
  },
  [setActiveItem]: (state, action) => {
    state.activeItem = action.payload;
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

const paymentReducer = createReducer(paymentInit, {
  [setActivePayment]: (state, action) => {
    state.activePayment = action.payload;
  },
});

const modalReducer = createReducer(modalInit, {
  [setResponse]: (state, action) => {
    state.response = action.payload;
  },
  [setActiveModal]: (state, action) => {
    state.activeModal = action.payload;
  },
});

const authReducer = createReducer(authInit, {
  [setAuth]: (state, action) => {
    state.auth = action.payload;
  },
  [setAutorizationActive]: (state, action) => {
    state.autorizationActive = action.payload;
  },
});

const userReducer = createReducer(userInit, {
  [setUserName]: (state, action) => {
    state.name = action.payload;
  },
  [setUserPhone]: (state, action) => {
    state.phone = action.payload;
  },
});

const reducer = createReducer(initState, {
  [setOrder]: (state, action) => {
    state.order = action.payload;
  },
  [setModification]: (state, action) => {
    state.modification = action.payload;
  },
  [setOrderTotal]: (state, action) => {
    state.orderTotal = action.payload;
  },
});

export {
  reducer,
  shopDataReducer,
  shopItemReducer,
  detailCardReducer,
  paymentReducer,
  modalReducer,
  authReducer,
  userReducer,
};
