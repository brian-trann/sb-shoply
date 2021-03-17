import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeTitleText } from './helpers';
import ProductButtons from './ProductButtons';
import './ProductDetail.css';
const ProductDetail = () => {
	const { id } = useParams();

	const { cartItems, products } = useSelector((st) => st);
	const { name, price, description, image_url } = products[id];

	const itemInCart = Object.keys(cartItems).includes(id);

	return (
		<React.Fragment>
			<div className='ProductDetail-container container'>
				<div className='ProductDetail-title display-4 text-center'>
					{makeTitleText(name)}
				</div>
				<div className='ProductDetail-img mt-5 mb-3 d-flex justify-content-center'>
					<img src={image_url} alt='Product' />
				</div>
				<div className='ProductDetail-body align-content-center'>
					<p>{description}</p>
					<p>${price.toLocaleString()}</p>
					<p>{itemInCart ? `${cartItems[id]} in cart.` : null} </p>
					<div className='ProductDetail-buttons align-content-center'>
						<ProductButtons id={id} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default ProductDetail;
