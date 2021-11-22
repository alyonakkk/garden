import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import client from "../shared/API/client";
import actionsTypes from "./constants";

interface IOrderTotal {
  place: string;
  time: string;
  comment: string;
}

const setShopData = createAction<[]>(actionsTypes.SET_SHOP_DATA);
const setActiveStore = createAction<string>(actionsTypes.SET_ACTIVE_STORE);
const setActiveItem = createAction<string>(actionsTypes.SET_ACTIVE_ITEM);
const setShopItem = createAction<[]>(actionsTypes.SET_SHOP_ITEM);
const setOrder = createAction<[]>(actionsTypes.SET_ORDER);
const setDetailCard = createAction<object>(actionsTypes.SET_DETAIL_CARD);
const setDetailActiveNav = createAction<string>(
  actionsTypes.SET_DETAIL_ACTIVE_NAV
);
const setModification = createAction<object>(actionsTypes.SET_MODIFICATION);
const setActivePayment = createAction<boolean>(actionsTypes.SET_ACTIVE_PAYMENT);
const setOrderTotal = createAction<IOrderTotal>(actionsTypes.SET_ORDER_TOTAL);
const setResponse = createAction<string>(actionsTypes.SET_RESPONSE);
const setActiveModal = createAction<boolean>(actionsTypes.SET_ACTIVE_MODAL);
const setAuth = createAction<boolean>(actionsTypes.SET_AUTH);
const setAutorizationActive = createAction<string>(
  actionsTypes.SET_AUTORIZATION_ACTIVE
);
const setUserName = createAction<string>(actionsTypes.SET_USER_NAME);
const setUserPhone = createAction<string>(actionsTypes.SET_USER_PHONE);

type fetchShopType =
  | { type: string; payload: [] }
  | { type: string; payload: string };

type fetchDetailCardType =
  | { type: string; payload: object }
  | { type: string; payload: string };

type fetchPaymentTypes =
  | { type: string; payload: boolean }
  | { type: string; payload: string };

type fetchAutorizationType = { type: string; payload: boolean };

function fetchShopDataGET(url: string) {
  return function (dispatch: Dispatch<fetchShopType>) {
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

function fetchShopItemGET(url: string) {
  return function (dispatch: Dispatch<fetchShopType>) {
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

function fetchDetailCardGET(url: string) {
  return function (dispatch: Dispatch<fetchDetailCardType>) {
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

function fetchDataPOST(url: string, orderTotal: object) {
  return async function (dispatch: Dispatch<fetchPaymentTypes>) {
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

function fetchDataAutorizationPOST(url: string) {
  return function (dispatch: Dispatch<fetchAutorizationType>) {
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
