import { ADD_TO_CART } from './actionTypes';
import data from './data.json';

const INITIAL_STATE = {
	products  : data.products,
	cartItems : {}
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const cartCopy = { ...state.cartItems };
			cartCopy[action.id] = cartCopy[action.id || 0] + 1;
			return { ...state, cartItems: cartCopy };

		default:
			return state;
	}
};
export default rootReducer;
