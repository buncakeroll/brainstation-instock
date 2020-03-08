import React, { Component } from 'react';
import axios from 'axios';
import './warehouseDetails.scss';
import backArrow from './../assets/icons/svg/Icon-back-arrow.svg';
import { Link } from 'react-router-dom';
import AddressCard from '../components/AddressCard/AddressCard';
import InventoryTable from '../components/InventoryTable/InventoryTable';

class WarehouseDetails extends Component {
    state = {
        warehouseData: [],
        warehouseInv: []
    }

    getWareHouseData = id => {
        axios.get(`http://localhost:8080/warehouse/${id}`)
            .then(result => {
                this.setState({
                    warehouseData: result.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getWareHouseData(this.props.match.params.id);
    }

    render() {
        return (
            <div className="details">
            <div className="details__namearrow">
                <Link className="details__link" to={'/warehouses'}>
                        <div className='details__box'>
                            <img className="details__arrow" alt="back arrow" src={backArrow} />
                            <p className="details__name">{this.state.warehouseData.name}</p>
                        </div>
                </Link>
            </div>
                <div className="details__namearrow">
                    <AddressCard warehouseData={this.state.warehouseData}/>
                </div>
                <div className='details__inv'>
                    <InventoryTable list={this.state.warehouseData.inventory} />
                </div>
            </div >
        )
    }
}
export default WarehouseDetails;


