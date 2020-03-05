import React, { Component } from 'react';
import axios from 'axios';
import Switch from 'react-switch';
import AddButton from './AddButton';

export default class CreateProduct extends Component {
    state = {
        inStock: false,
        inventoryList: {},
        displayForm: false
    };

    toggleForm = () => {
        if (!this.state.displayForm) {
        this.setState({
            displayForm: true
        });
        } else {
        this.setState({
            displayForm: false
        });
        }
    };

    submitHandler = (event) => {
        event.preventDefault();
        let productinput = event.target.product.value;
        let descriptioninput = event.target.description.value;
        let orderedinput = event.target.ordered.value;
        let cityinput = event.target.city.value;
        let countryinput = event.target.country.value;
        let quantityinput = event.target.quantity.value;
        let inStock = this.state.inStock;

        if (productinput === '') {
        return alert('Please enter a product name');
        }
        if (quantityinput === '') {
        return alert('Please enter a quantity');
        }
        if (orderedinput === '') {
        return alert('Please enter an order date');
        }
        if (cityinput === '') {
        return alert('Please enter a city');
        }

        const newProduct = axios.post('http://localhost:8080/inventory', {
            name: productinput,
            description: descriptioninput,
            lastOrdered: orderedinput,
            city: cityinput,
            country: countryinput,
            quantity: quantityinput,
            isInstock: inStock,
            warehouseId: 'W0'
        }).then(res => {
            console.log(res.data)
            axios.get('http://localhost:8080/inventory')
            .then(res => {
                this.setState({
                    inventoryList: [this.state.inventoryList, newProduct]
                    // displayForm: false,
                    // inventoryList: res.data
                })
            })
        })
    };

    statusUpdate = checked => {
        console.log(checked)
        this.setState({
            inStock: checked
        });
    };



    render() {
    let stock;
    if (this.state.inStock === true) {
        stock = 'In Stock';
    } else if (this.state.inStock === false) {
        stock = 'Out of Stock';
    }
    let form;
    if (this.state.displayForm) {
        form = (
        <div className='form--container'>
            <div className='form--new-form'>
            <h1 className='form--new-form__title'>Create New</h1>
            <div className='form--new-form__form'>
                <form onSubmit={this.submitHandler}>
                <div className='row'>
                    <div className='column'>
                    <label>Product</label>
                    <input type='text' id='product' placeholder='Item Name' />
                    </div>
                    <div className='column'>
                    <label>Last Ordered</label>
                    <input type='text' id='ordered' placeholder='mm/dd/yyyy' />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                    <label>City</label>
                    <input type='text' id='city' placeholder='City' />
                    </div>
                    <div className='column' id='selectdiv'>
                    <label>Country</label>
                    <select name='country' id='country'>
                        <option value='Canada'>Canada</option>
                        <option value='USA'>USA</option>
                    </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                    <label>Quantity</label>
                    <input type='text' id='quantity' placeholder='0' />
                    </div>
                    <div className='column'>
                    <label>Status</label>
                    <div id='status'>
                        <p>{stock}</p>
                        <Switch
                        name='inStock'
                        onChange={this.statusUpdate}
                        checked={this.state.inStock}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        />
                    </div>
                    </div>
                </div>
                <label>Item Description</label>
                <textarea id='description' placeholder='(Optional)' />
                <div className='form__buttons'>
                    <button id='Save'>Save</button>
                    <button id='Cancel' onClick={this.toggleForm}>Cancel</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        );
    }
    return (
        <div>
        {form}
        <AddButton Popup={this.toggleForm} />
        </div>
    );
    };
};