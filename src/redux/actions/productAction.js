import {
  ADD_PRODUCT,
  ADD_TO_CART,
  EDIT_PRODUCT,
  LOAD_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  SEARCH_PRODUCT,
} from "../actionTypes/actionTypes";

export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const editProduct = (data) => {
  return {
    type: EDIT_PRODUCT,
    payload: data,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const searchProduct = (query) => {
  return {
    type: SEARCH_PRODUCT,
    payload: query,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
