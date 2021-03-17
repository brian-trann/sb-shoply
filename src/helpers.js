const calculateCartTotal = (products, cart) => {
	let total = Object.keys(products).reduce((acc, curr) => {
		const { price } = products[curr];
		const quantity = cart[curr] || 0;
		return acc + price * quantity;
	}, 0);

	return total;
};

const calculateCartQuantity = (cartItems) => {
	const quantity = Object.keys(cartItems).reduce((acc, curr) => {
		return acc + (cartItems[curr] || 0);
	}, 0);
	return quantity;
};

export { calculateCartTotal, calculateCartQuantity };
