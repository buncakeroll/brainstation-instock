import React from 'react';
import './DisplayPage.scss';

function DisplayPage(props) {
    return (
        <section className='display'>
        <div className='display__container'>
            <h2 className='display__title'>{props.heading}</h2>
            <input type="text" placeholder="Search" name="search"></input>
        </div>
        </section>
    )
}

export default DisplayPage;