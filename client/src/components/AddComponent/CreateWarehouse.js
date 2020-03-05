import React, { Component } from 'react';
import axios from 'axios';
import AddButton from './AddButton';

export default class CreateWarehouse extends Component {
    state = {
        warehouseList: {},
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
    submitHandler = event => {
        event.preventDefault();
        let warehouseNameInput = event.target.warehouseName.value;
        let warehouseIdInput = event.target.warehouseId.value;
        let warehouseAddressInput = event.target.warehouseAddress.value;
        let locationInput = event.target.location.value;
        let contactNameInput = event.target.contactName.value;
        let contactPositionInput = event.target.contactPosition.value;
        let contactTelephoneInput = event.target.contactTelephone.value;
        let contactEmailInput = event.target.contactEmail.value;
        let descriptionInput = event.target.description.value;

        if (warehouseNameInput === '') {
        return alert('Please enter a warehouse name');
        }
        if (warehouseIdInput === '') {
        return alert('Please enter a warehouse id');
        }
        if (warehouseAddressInput === '') {
        return alert('Please enter an address');
        }
        if (locationInput === '') {
            return alert('Please enter a location');
        }
        if (contactNameInput === '') {
            return alert('Please enter a name');
        }
        if (contactPositionInput === '') {
            return alert('Please enter a position');
        }
        if (contactTelephoneInput === '') {
            return alert('Please enter a phone number');
        }
        if (contactEmailInput === '') {
            return alert('Please enter an email address');
        }

        const newWarehouse = axios.post('http://localhost:8080/warehouses', {
            id: warehouseIdInput,    
            name: warehouseNameInput,
            address: {
                street: warehouseAddressInput,
                location: locationInput
            },
            contact: {
                name: contactNameInput,
                position: contactPositionInput,
                phone: contactTelephoneInput,
                email: contactEmailInput
            },
            inventoryCategories: descriptionInput
        }).then(res => {
            console.log(res.data)
            axios.get('http://localhost:8080/warehouses')
            .then(res => {
                this.setState({
                    warehouseList: [this.state.warehouseList, newWarehouse]
                    // displayForm: false,
                    // warehouseList: res.data
                })
            })
        })
    };

    render() {
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
                        <label>Warehouse Name</label>
                        <input type='text' id='warehouseName' placeholder='Warhouse Name' />
                    </div>
                    <div className='column'>
                        <label>Warehouse ID</label>
                        <input type='text' id='warehouseId' placeholder='Warhouse ID' />
                    </div>
                </div> 
                <div className='row'>
                    <div className='column'>
                        <label>Address</label>
                        <input type='text' id='warehouseAddress' placeholder='Address'/>
                    </div>
                    <div className='column' id='warehouselocation'>
                        <label>Location</label>
                        <select name='location' id='location'>
                            <option value='Toronto'>Toronto, ON</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <label>Contact Name</label>
                        <input type='text' id='contactName' placeholder='Warhouse Name' />
                    </div>
                    <div className='column'>
                        <label>Contact Position</label>
                        <input type='text' id='contactPosition' placeholder='Warhouse ID' />
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <label>Contact Telephone</label>
                        <input type='text' id='contactTelephone' placeholder='Warhouse Name' />
                    </div>
                    <div className='column'>
                        <label>Contact Email</label>
                        <input type='email' id='contactEmail' placeholder='Warhouse ID' />
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