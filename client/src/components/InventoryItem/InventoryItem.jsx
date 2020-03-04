import React from 'react';
import './InventoryItem.scss';
import dots from '../../assets/icons/svg/Icon-kebab-default.svg';

const InventoryItem = (props) => {

    const {name, description, lastOrdered, quantity, city, country, isInStock} = props.item

    let inStock = true;
    isInStock ? inStock = 'In Stock' : inStock = 'Out of Stock';


    return (
        <div className='item'>
            <div className='item__box'>
                <div><h3 className='item__title'>ITEM</h3></div>
                <div><h4 className='item__name'>{name}</h4></div>
                <div><p className='item__info--space'>{description}</p></div>
                
                <div><h3 className='item__title'>LAST ORDERED</h3></div>
                <div><p className='item__info--space'>{lastOrdered}</p></div>
                
                <div><h3 className='item__title'>LOCATION</h3></div>
                <div><p className='item__info--space'>{`${city}, ${country}`}</p></div>
                
                <div><h3 className='item__title'>QUANTITY</h3></div>
                <div><p className='item__info--space'>{quantity}</p></div>
                
                <div><h3 className='item__title'>STATUS</h3></div>
                <div><p className='item__info--space'>{inStock}</p></div>
            </div>
            <img src={dots} className='item__kebab'/>
        </div>
    )
}

export default InventoryItem;