import React from 'react';
import './DisplayPage.scss';

class DisplayPage extends React.Component {


    componentDidMount() {
        const input = document.getElementById('searchBar');
        //Checks search bar if enter is clicked
        input.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                this.props.searchHandler(input.value)
            }
        })
    }

    render() {
        return (
            <section className='display'>
            <div className='display__container'>
                <h2 className='display__title'>{this.props.heading}</h2>
                <input id='searchBar' type="text" placeholder="Search" name="search"></input>
            </div>
            </section>
        )
    }
}

export default DisplayPage;