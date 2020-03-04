import React from 'react';
import './AddButton.scss';
import add from '../../assets/icons/svg/Icon-add.svg';

const AddButton = (props) => {

    return (
        <div className='addButton'>
            <img src={add} alt='plus icon' className='addButton__plus'/>
        </div>
    )

}

export default AddButton;