import React, {Component} from 'react';
import ItemList from './ItemList.js'
import logo from '../logo.svg';

export default class Order extends Component {
  render() {
    const date = new Date(this.props.order.creation).toString()
    return (
      <div className='col-sm-12 col-md-6  col-lg-4 py-2'>
        <div className='card p-4'>
          <img className='card-img-top' src={logo} alt={this.props.order.name}/>
          <div className='card-block'>

            <h4 className='card-title'>{this.props.order.name}</h4>

            <ItemList items={this.props.order.orderItemList}/>

            <div className='card-footer'>
              <small className='text-muted'> {date} </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
