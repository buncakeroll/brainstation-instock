import React from 'react';
import './AddressCard.scss';

const AddressCard = (props) => {
    console.log(props.warehouseData);
    if (props.warehouseData.address) {
        return (
            <div className='address'>
                <div className='address__box--indent'>
                    <h3 className='address__title'>ADDRESS</h3>
                    <p className='address__info'>{props.warehouseData.address.street}</p>
                    <p className='address__info--spaced'>{props.warehouseData.address.location}</p>
                </div>

                <div className='address__box'>
                    <h3 className='address__title'>CONTACT</h3>
                    <p className='address__info'>{props.warehouseData.contact.name}</p>
                    <p className='address__info'>{props.warehouseData.contact.position}</p>
                    <p className='address__info--spaced'>{props.warehouseData.contact.phone}</p>
                    <p className='address__info'>{props.warehouseData.contact.email}</p>
                </div>
            </div>
        )
    }
    else {
        return null;
    }

}

export default AddressCard;