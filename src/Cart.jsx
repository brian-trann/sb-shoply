import React from 'react';
import { useSelector } from 'react-redux';
import { calculateCartQuantity } from './helpers';
import ProductButtons from './ProductButtons';
import NoItems from './NoItems';
import './Cart.css';
const Cart = () => {
	const { cartValue, cartItems, products } = useSelector((st) => st);
	const cartIsEmpty = !Object.keys(cartItems).length;
	const numItems = calculateCartQuantity(cartItems);

	const renderCartTable = () => {
		const rows = Object.keys(cartItems).map((id) => (
			<tr key={id}>
				<td>{products[id].name}</td>
				<td>{products[id].price}</td>
				<td>{cartItems[id]}</td>
				<td>
					<ProductButtons id={id} />
				</td>
			</tr>
		));
		return (
			<table className='table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>+/-</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	};

	return (
		<div className='Cart-container container'>
			<div className='Cart-title display-4'>This is your cart</div>
			<div className='Cart-total'>VALUE ${cartValue.toLocaleString()}</div>
			<div className='Cart-quantity'>Cart Items: {numItems}</div>

			{cartIsEmpty ? <NoItems /> : renderCartTable()}
		</div>
	);
};
export default Cart;
