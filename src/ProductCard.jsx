import React from 'react';
import { Card, CardText, CardTitle, CardBody, Button, CardImg, CardFooter } from 'reactstrap';
import './ProductCard.css';
const ProductCard = ({ product }) => {
	const { name, price, description, image_url } = product;
	return (
		<Card className='ProductCard-container m-2'>
			<CardImg top className='ProductCard-img' src={image_url} alt='Product Image' />
			<CardBody className='d-flex flex-column'>
				<CardTitle tag='h4'>
					{name} - ${price.toLocaleString()}
				</CardTitle>
				<CardText>{description}</CardText>

				<CardText className='small mt-auto' />

				<CardText className='mt-auto'>
					<button className='btn btn-outline-info btn-sm'>remove</button>
					<button className='btn btn-info btn-sm float-right'>add</button>
				</CardText>
			</CardBody>
		</Card>
	);
};
export default ProductCard;
