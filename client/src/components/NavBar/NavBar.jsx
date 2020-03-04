  
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/Logo-instock.svg';

export default class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar--logo'>
                    <NavLink to='/inventory'>
                        <img src={ Logo } alt='Instock Logo'/>
                    </NavLink>
                </div>
                <div className='navbar--links'>
                    <ul className='navbar--nav'>
                        <NavLink to='/inventory' className='navbar--item' activeClassName='navbar--item-active'><li>Inventory</li></NavLink>
                        <NavLink to='/warehouses' className='navbar--item' activeClassName='navbar--item-active'><li>Locations</li></NavLink>
                    </ul>
                </div>
            </div>
        );
    }
}