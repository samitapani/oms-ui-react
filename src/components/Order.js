import React, {Component} from 'react';
import ItemList from './ItemList.js'
import logo from '../logo.svg';

export default class Order extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const date = new Date(this.props.order.creation).toString()

    return (
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <div className='card p-2'>
          <img className='card-img-top' src={logo} alt={this.props.order.name}/>
          <div className='card-block'>
            <h4 className='card-title'>{this.props.order.name}</h4>

            <ItemList items={this.props.order.orderItemList}/>

            <div className='card-footer mt-2'>
              <small className='text-muted'> {date} </small>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

