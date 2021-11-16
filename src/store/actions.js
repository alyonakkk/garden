import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import client from "../shared/API/client";
import {
  SET_SHOP_DATA,
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
  SET_AUTH,
  SET_AUTORIZATION_ACTIVE,
  SET_USER_NAME,
  SET_USER_PHONE,
} from "../store/constants";

const setShopData = createAction(SET_SHOP_DATA);
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
const setAuth = createAction(SET_AUTH);
const setAutorizationActive = createAction(SET_AUTORIZATION_ACTIVE);
const setUserName = createAction(SET_USER_NAME);
const setUserPhone = createAction(SET_USER_PHONE);

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

function fetchShopItemGET(url) {
  return function (dispatch) {
    client
      .get(url)
      .then((response) => {
        dispatch(setShopItem(response.data["items"]));
      })
      .catch(() => {
        dispatch(setResponse("faild"));
      });
  };
}

function fetchDetailCardGET(url) {
  return function (dispatch) {
    client
      .get(url)
      .then((response) => {
        dispatch(setDetailCard(response.data["item"]));
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

function fetchDataAutorizationPOST(url) {
  return function (dispatch) {
    client.post(url, {}).then((response) => {
      dispatch(setAuth(true));
    });
  };
}

export {
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
  fetchShopDataGET,
  fetchShopItemGET,
  fetchDetailCardGET,
  fetchDataPOST,
  fetchDataAutorizationPOST,
};
