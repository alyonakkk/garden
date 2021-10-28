import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  SET_SHOP_DATA,
  SET_CLOSE,
  SET_ACTIVE_STORE,
  SET_ACTIVE_ITEM,
  SET_SHOP_ITEM,
  SET_ORDER,
  SET_DETAIL_CARD,
} from "../store/constants";

const setShopData = createAction(SET_SHOP_DATA);
const setClose = createAction(SET_CLOSE);
const setActiveStore = createAction(SET_ACTIVE_STORE);
const setActiveItem = createAction(SET_ACTIVE_ITEM);
const setShopItem = createAction(SET_SHOP_ITEM);
const setOrder = createAction(SET_ORDER);
const setDetailCard = createAction(SET_DETAIL_CARD);

function fetchDataGET(url, action, slug, item) {
  return function (dispatch) {
    axios.get(url).then((response) => {
      if (slug !== undefined && item === undefined) {
        dispatch(action(response.data["items"][slug]));
      } else if (slug !== undefined && item !== undefined) {
        dispatch(action(response.data["item"][item]));
      } else {
        dispatch(action(response.data));
      }
    });
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
  fetchDataGET,
};
