import React, {Component} from 'react';
import './InventoryTable.scss';
import InventoryItem from '../InventoryItem/InventoryItem';
import axios from 'axios';

const InventoryTable = (props) => {

    const deleteHandler = (event) => {
        //handles deletion of item and re-renders inventory list
    }

    if (props.list) {
        return (
            <section className='table'>
                <div className='table__wrap'>
                    <div className='table__heading-bar'>
                        <div className='table__box-start'>ITEM</div>
                        <div className='table__box-reg'>LAST ORDERED</div>
                        <div className='table__box-reg'>LOCATION</div>
                        <div className='table__box-reg'>QUANTITY</div>
                        <div className='table__box-reg--marg'>STATUS</div>
                    </div>
                    {
                        props.list.map(item => {
                            return <InventoryItem item={item} key={item.id} deleteHandler={deleteHandler}/>
                        })
                    }
                
                </div>
            </section>
        )
    } else {
        return null;
    }
}

export default InventoryTable;