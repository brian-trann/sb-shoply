import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (id) => ({ type: ADD_TO_CART, id });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });
