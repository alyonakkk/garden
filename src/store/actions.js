import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import client from "../shared/API/client";
import {
  SET_SHOP_DATA,
  SET_CLOSE,
  SET_ACTIVE_STORE,
  SET_ACTIVE_ITEM,
  SET_SHOP_ITEM,
  SET_ORDER,
  SET_DETAIL_CARD,
  SET_DETAIL_ACTIVE_NAV,
  SET_MODIFICATION,
  SET_ACTIVE_PAYMENT,
  SET_ORDER_TOTAL,
  SET_RESPONSE,
  SET_ACTIVE_MODAL,
} from "../store/constants";

const setShopData = createAction(SET_SHOP_DATA);
const setClose = createAction(SET_CLOSE);
const setActiveStore = createAction(SET_ACTIVE_STORE);
const setActiveItem = createAction(SET_ACTIVE_ITEM);
const setShopItem = createAction(SET_SHOP_ITEM);
const setOrder = createAction(SET_ORDER);
const setDetailCard = createAction(SET_DETAIL_CARD);
const setDetailActiveNav = createAction(SET_DETAIL_ACTIVE_NAV);
const setModification = createAction(SET_MODIFICATION);
const setActivePayment = createAction(SET_ACTIVE_PAYMENT);
const setOrderTotal = createAction(SET_ORDER_TOTAL);
const setResponse = createAction(SET_RESPONSE);
const setActiveModal = createAction(SET_ACTIVE_MODAL);

function fetchShopDataGET(url) {
  return function (dispatch) {
    client
      .get(url)
      .then((response) => {
        dispatch(setShopData(response.data));
      })
      .catch(() => {
        dispatch(setResponse("faild"));
      });
  };
}

function fetchShopItemGET(url, item) {
  return function (dispatch) {
    client
      .get(url)
      .then((response) => {
        dispatch(setShopItem(response.data["items"][item]));
      })
      .catch(() => {
        dispatch(setResponse("faild"));
      });
  };
}

function fetchDetailCardGET(url, item) {
  return function (dispatch) {
    client
      .get(url)
      .then((response) => {
        dispatch(setDetailCard(response.data["item"][item]));
      })
      .catch(() => {
        dispatch(setResponse("faild"));
      });
  };
}

function fetchDataPOST(url, orderTotal) {
  return async function (dispatch) {
    try {
      dispatch(setResponse("loading"));
      setTimeout(() => {
        dispatch(setActiveModal(true));
      }, 100);
      const response = await axios.post(url, orderTotal);
      setTimeout(() => {
        dispatch(setActiveModal(false));
      }, 1800);
      setTimeout(() => {
        dispatch(setActiveModal(true));
        dispatch(setResponse("success"));
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        dispatch(setActiveModal(false));
        dispatch(setActiveModal(true));
        dispatch(setResponse("faild"));
      }, 2000);
    }
  };
}

export {
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
  fetchShopDataGET,
  fetchShopItemGET,
  fetchDetailCardGET,
  fetchDataPOST,
};
