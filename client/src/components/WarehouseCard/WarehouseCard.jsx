import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './WarehouseCard.scss';
import Axios from 'axios';
import arrowRight from './../../assets/icons/svg/Icon-arrow-right.svg';

class WarehouseCard extends Component {

    state = {
        warehouseList: []
    }

    getWarehouses = () => {
        console.log('loading warehouses...')
        Axios.get(
            'http://localhost:8080/warehouse'
        ).then((result) => {
            this.setState({
                warehouseList: result.data
            })
        })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getWarehouses();
    }

    render() {
        return (
            <>
                {this.state.warehouseList.map(item => {
                    return (
                        <Link className='card__link' key={item.id} to={`/warehouses/${item.id}`}>
                            <div className='card'>
                                <div className='card__nameaddressarrow'>
                                    <div className='card__nameaddress'>
                                        <p className='card__name'>{item.name}</p>
                                        <p className='card__address'>{item.address.street}, {item.address.location}</p>
                                    </div>
                                    <img className='card__arrow' alt='right arrow' src={arrowRight}></img>
                                </div>
                                <div className='card__threecs'>
                                    <div className='card__contact'>
                                        <p className='card__contactname'>{item.contact.name}</p>
                                        <p className='card__contactposition'>{item.contact.position}</p>
                                    </div>
                                    <div className='card__contactinfo'>
                                        <p className='card__contactnum'>{item.contact.phone}</p>
                                        <p className='card__contactemail'>{item.contact.email}</p>
                                    </div>
                                    <p className='card__categories'>{item.inventoryCategories}</p>
                                </div>
                                <img className='card__arrow2' alt='right arrow' src={arrowRight} />
                            </div>
                        </Link>
                    )
                })}

            </>
        )
    }
}

export default WarehouseCard;