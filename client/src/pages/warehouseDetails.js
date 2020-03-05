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
                <Link className="details__link" to={'/warehouses'}>
                    <div className="details__namearrow">
                        <img className="details__arrow" alt="back arrow" src={backArrow} />
                        <p className="details__name">{this.state.warehouseData.name}</p>
                    </div>
                </Link>
                <AddressCard warehouseData={this.state.warehouseData}/>
                <InventoryTable list={this.state.warehouseData.inventory}/>
            </div >
        )
    }
}
export default WarehouseDetails;


