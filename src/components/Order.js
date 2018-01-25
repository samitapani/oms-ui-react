import React, {Component} from 'react';
import OrderItemList from './OrderItemList.js'
import logo from '../logo.svg';

export default class Order extends Component {
  render() {
    const date = new Date(this.props.order.creation).toString()
    return (
      <div className='col-sm-6 py-4'>
        <div className='card p-4'>
          <img className='card-img-top' src={logo} alt={this.props.order.name}/>
          <div className='card-block'>
            <h4 className='card-title'>{this.props.order.name}</h4>
            <div className="card-text">
              <OrderItemList key={this.props.order.orderItemList.id} items={this.props.order.orderItemList}/>
            </div>
            <div className='card-footer'>
              <small className='text-muted'> {date} </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
