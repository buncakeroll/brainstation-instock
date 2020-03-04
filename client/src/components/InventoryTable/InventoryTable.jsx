import React, {Component} from 'react';
import './InventoryTable.scss';
import InventoryItem from '../InventoryItem/InventoryItem';
import axios from 'axios';

class InventoryTable extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/inventory').then(data => {
            this.setState({
                list: data.data
            })
        })
    }

    render() {
        return (
            <section className='table'>
                <div className='table__heading-bar'>
                    <div className='table__box-start'>ITEM</div>
                    <div className='table__box-reg'>LAST ORDERED</div>
                    <div className='table__box-reg'>LOCATION</div>
                    <div className='table__box-reg'>QUANTITY</div>
                    <div className='table__box-reg--marg'>STATUS</div>
                </div>
                {
                    this.state.list.map(item => {
                        return <InventoryItem item={item} key={item.id}/>
                    })
                }
            </section>
        )
    }
}

export default InventoryTable;