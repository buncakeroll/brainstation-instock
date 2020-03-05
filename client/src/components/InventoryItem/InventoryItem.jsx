import React from 'react';
import './InventoryItem.scss';
import dots from '../../assets/icons/svg/Icon-kebab-default.svg';
import {Link} from 'react-router-dom';
import textEllipsis from 'text-ellipsis';

const InventoryItem = (props) => {

    const {id, name, description, lastOrdered, quantity, city, country, isInstock} = props.item
    let inStock = 'Out of Stock';
    if (isInstock) {
        inStock = 'In Stock';
    }


    return (
        <div className='item'>
        <Link to={`/inventory/${id}`} className='item__link'>
            <div className='item__box'>
                <div className='item__invisible'><h3 className='item__title'>ITEM</h3></div>
                <div className="item__box-start">
                    <h4 className='item__name'>{name}</h4>
                    <p className='item__info--space'>{textEllipsis(description, 35)}</p>
                </div>
                
                <div className='item__invisible'><h3 className='item__title'>LAST ORDERED</h3></div>
                <div className="item__box-reg"><p className='item__info--space'>{lastOrdered}</p></div>
                
                <div className='item__invisible'><h3 className='item__title'>LOCATION</h3></div>
                <div className="item__box-reg"><p className='item__info--space'>{`${city}, ${country}`}</p></div>
                
                <div className='item__invisible'><h3 className='item__title'>QUANTITY</h3></div>
                <div className="item__box-reg"><p className='item__info--space'>{quantity}</p></div>
                
                <div className='item__invisible'><h3 className='item__title'>STATUS</h3></div>
                <div className="item__box-reg--marg"><p className='item__info--space'>{inStock}</p></div>
            </div>
            </Link>
            <div className='item__kebab-box' tabIndex='0'>
<<<<<<< HEAD
                <img src={dots} className='item__kebab'/>
                <div className='item__drop' onClick={props.deleteHandler}>Remove</div>
=======
                <img src={dots} className='item__kebab' alt='delete icon'/>
                <div className='item__drop'>Remove</div>
>>>>>>> develop
            </div>
        </div>
    )
}

export default InventoryItem;