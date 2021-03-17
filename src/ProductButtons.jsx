import React from 'react';
import { CardText } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

const ProductButtons = ({ id }) => {
	const dispatch = useDispatch();
	const add = () => dispatch(addToCart(id));
	const remove = () => dispatch(removeFromCart(id));
	return (
		<CardText className='mt-auto'>
			<button onClick={remove} className='btn btn-outline-info btn-sm'>
				-
			</button>
			<button onClick={add} className='btn btn-info btn-sm float-right'>
				+
			</button>
		</CardText>
	);
};
export default ProductButtons;
