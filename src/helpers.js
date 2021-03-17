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

const makeTitleText = (str) => {
	return str.split(' ').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
};

export { calculateCartTotal, calculateCartQuantity, makeTitleText };
