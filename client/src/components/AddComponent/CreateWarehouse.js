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

    stopPropagation = event => {
        event.stopPropagation();
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

        axios.post('http://localhost:8080/warehouse', {
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
            this.props.reload();
            this.toggleForm();
        })
    };

    render() {
        let form;
        if (this.state.displayForm) {
            form = (
                <div className='form--container' onClick={this.toggleForm}>
                    <div className='form--new-form' onClick={this.stopPropagation}>
                        <h1 className='form--new-form__title'>Create New</h1>
                        <div className='form--new-form__form'>
                            <form onSubmit={this.submitHandler}>
                                <div className='row'>
                                    <div className='column'>
                                        <label>Warehouse Name</label>
                                        <input type='text' id='warehouseName' placeholder='Warehouse Name' />
                                    </div>
                                    <div className='column'>
                                        <label>Warehouse ID</label>
                                        <input type='text' id='warehouseId' placeholder='Warehouse ID' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='column'>
                                        <label>Address</label>
                                        <input type='text' id='warehouseAddress' placeholder='Enter Address' />
                                    </div>
                                    <div className='column' id='warehouselocation'>
                                        <label>Location</label>
                                        <select name='location' id='location'>
                                            <option value='Toronto'>Toronto, CAN</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='column'>
                                        <label>Contact Name</label>
                                        <input type='text' id='contactName' placeholder='Enter Name' />
                                    </div>
                                    <div className='column'>
                                        <label>Contact Position</label>
                                        <input type='text' id='contactPosition' placeholder='Enter Position' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='column'>
                                        <label>Contact Telephone</label>
                                        <input type='text' id='contactTelephone' placeholder='(000) - 000 - 0000' />
                                    </div>
                                    <div className='column'>
                                        <label>Contact Email</label>
                                        <input type='email' id='contactEmail' placeholder='email@instock.com' />
                                    </div>
                                </div>
                                <label>Categories</label>
                                <textarea id='description' placeholder='Use commas to seperate each category' />
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