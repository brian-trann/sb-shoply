import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
const NavBar = () => {
	return (
		<React.Fragment>
			<div className='NavBar-container container'>
				<Navbar>
					<NavLink exact to='/'>
						Shoply
					</NavLink>
					<Nav>
						<NavItem className='ml-auto mr-4'>
							<NavLink exact to='/products'>
								Products
							</NavLink>
						</NavItem>
						<NavItem className='ml-auto mr-4'>
							<NavLink exact to='/cart'>
								Cart
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		</React.Fragment>
	);
};
export default NavBar;
