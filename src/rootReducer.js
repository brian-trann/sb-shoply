import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { calculateCartTotal } from './helpers';
import data from './data.json';

const INITIAL_STATE = {
	products  : data.products,
	cartItems : {},
	cartValue : 0
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const cartCopy = { ...state.cartItems };
			cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;

			return {
				...state,
				cartItems : cartCopy,
				cartValue : calculateCartTotal(state.products, cartCopy)
			};
		}
		case REMOVE_FROM_CART: {
			let cartCopy = { ...state.cartItems };
			if (!cartCopy[action.id]) return state;
			cartCopy[action.id]--;
			if (cartCopy[action.id] === 0) {
				delete cartCopy[action.id];
			}
			return {
				...state,
				cartItems : cartCopy,
				cartValue : calculateCartTotal(state.products, cartCopy)
			};
		}

		default:
			return state;
	}
};
export default rootReducer;
