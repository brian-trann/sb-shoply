import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { CardGroup } from 'reactstrap';
import './ProductsList.css';
const ProductsList = () => {
	const products = useSelector((st) => st.products);

	const renderProductCards = Object.keys(products).map((id) => (
		<ProductCard product={products[id]} key={id} />
	));
	return (
		<div className='ProductsList-container container'>
			<div className='ProductsList-Title display-3 text-center mt-3 mb-4'>Shoply</div>
			<CardGroup>
				<div className='row justify-content-center'>{renderProductCards}</div>
			</CardGroup>
		</div>
	);
};
export default ProductsList;
