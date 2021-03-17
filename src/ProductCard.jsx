import React from 'react';
import { Card, CardText, CardTitle, CardBody, CardImg } from 'reactstrap';
import './ProductCard.css';
import ProductButtons from './ProductButtons';
const ProductCard = ({ product, id }) => {
	const { name, price, description, image_url } = product;

	return (
		<Card className='ProductCard-container m-2'>
			<CardImg top className='ProductCard-img' src={image_url} alt='Product Image' />
			<CardBody className='d-flex flex-column'>
				<CardTitle tag='h4'>
					{name} - ${price.toLocaleString()}
				</CardTitle>
				<CardText>{description}</CardText>
				<ProductButtons id={id} />
			</CardBody>
		</Card>
	);
};
export default ProductCard;
