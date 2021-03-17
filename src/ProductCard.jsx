import React from 'react';
import { Card, CardText, CardTitle, CardBody, CardImg } from 'reactstrap';
import './ProductCard.css';
import ProductButtons from './ProductButtons';
import { useHistory } from 'react-router-dom';
import { makeTitleText } from './helpers';
const ProductCard = ({ product, id }) => {
	const { name, price, description, image_url } = product;
	const history = useHistory();
	const handleClick = () => {
		history.push(`/products/${id}`);
	};
	const upperName = makeTitleText(name);

	return (
		<Card className='ProductCard-container m-2'>
			<CardImg
				top
				onClick={handleClick}
				className='ProductCard-img'
				src={image_url}
				alt='Product Image'
			/>
			<CardBody className='d-flex flex-column'>
				<CardTitle tag='h4' onClick={handleClick}>
					{upperName} - ${price.toLocaleString()}
				</CardTitle>
				<CardText onClick={handleClick}>{description}</CardText>

				<ProductButtons id={id} />
			</CardBody>
		</Card>
	);
};
export default ProductCard;
