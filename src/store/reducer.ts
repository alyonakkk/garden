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
    place: "",
    time: "",
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
  phone: "",
};

const shopDataReducer = createReducer(shopDataInit, (builder) => {
  builder
    .addCase(setShopData, (state, action) => {
      state.shopData = action.payload;
    })
    .addCase(setActiveStore, (state, action) => {
      state.activeStore = action.payload;
    });
});

const shopItemReducer = createReducer(shopItemInit, (builder) => {
  builder
    .addCase(setShopItem, (state, action) => {
      state.shopItem = action.payload;
    })
    .addCase(setActiveItem, (state, action) => {
      state.activeItem = action.payload;
    });
});

const detailCardReducer = createReducer(detailCardInit, (builder) => {
  builder
    .addCase(setDetailCard, (state, action) => {
      state.detailCard = action.payload;
    })
    .addCase(setDetailActiveNav, (state, action) => {
      state.detailActiveNav = action.payload;
    });
});

const paymentReducer = createReducer(paymentInit, (builder) => {
  builder.addCase(setActivePayment, (state, action) => {
    state.activePayment = action.payload;
  });
});

const modalReducer = createReducer(modalInit, (builder) => {
  builder
    .addCase(setResponse, (state, action) => {
      state.response = action.payload;
    })
    .addCase(setActiveModal, (state, action) => {
      state.activeModal = action.payload;
    });
});

const authReducer = createReducer(authInit, (builder) => {
  builder
    .addCase(setAuth, (state, action) => {
      state.auth = action.payload;
    })
    .addCase(setAutorizationActive, (state, action) => {
      state.autorizationActive = action.payload;
    });
});

const userReducer = createReducer(userInit, (builder) => {
  builder
    .addCase(setUserName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(setUserPhone, (state, action) => {
      state.phone = action.payload;
    });
});

const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(setOrder, (state, action) => {
      state.order = action.payload;
    })
    .addCase(setModification, (state, action) => {
      state.modification = action.payload;
    })
    .addCase(setOrderTotal, (state, action) => {
      state.orderTotal = action.payload;
    });
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
