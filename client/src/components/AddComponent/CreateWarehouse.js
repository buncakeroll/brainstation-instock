import React, { Component } from 'react';
import axios from 'axios';
import AddButton from './AddButton';

export default class CreateWarehouse extends Component {

    stopPropagation = event => {
        event.stopPropagation();
    };

    render() {
        let form;
        if (this.props.displayForm) {
            return (
                <div className='form--container' onClick={this.props.toggleForm}>
                    <div className='form--new-form' onClick={this.stopPropagation}>
                        <h1 className='form--new-form__title'>Create New</h1>
                        <div className='form--new-form__form'>
                            <form onSubmit={this.props.submitHandler}>
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
                                    <button id='Cancel' onClick={this.props.toggleForm}>Cancel</button>
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
                <AddButton toggleForm={this.props.toggleForm} />
            </div>
        );
    };
};