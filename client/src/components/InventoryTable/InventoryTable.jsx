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
                <div className='table__heading-bar'></div>
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