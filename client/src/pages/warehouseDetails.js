import React, { Component } from 'react';
import axios from 'axios';
import './warehouseDetails.scss';

class WarehouseDetails extends Component {
    state = {
        warehouseData: [],
    }

    getWareHouseData = id => {
        axios.get(`http://localhost:8080/warehouse/${id}`)
            .then(result => {
                this.setState({
                    warehouseData: result.data
                })
                console.log(this.state.warehouseData)
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getWareHouseData(this.props.match.params.id);
    }

    render() {
        return (<div>
            <p>Hello</p>
        </div>)
    }
}
export default WarehouseDetails;


