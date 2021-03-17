import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsList from './ProductsList';
import Cart from './Cart';
import ProductDetail from './ProductDetail';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<ProductsList />
			</Route>
			<Route exact path='/cart'>
				<Cart />
			</Route>
			<Route exact path='/products'>
				<ProductsList />
			</Route>
			<Route exact path='/products/:id'>
				<ProductDetail />
			</Route>
		</Switch>
	);
};
export default Routes;
