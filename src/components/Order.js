import React, {Component} from 'react';
import ItemList from './ItemList.js'
import logo from '../logo.svg';

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order,
      nextOrderId: props.nextOrderId,
      nextOrderId: 1000 // debug
    }
    this.addItem = this.addItem.bind(this);

  }

  addItem(event, item) {
    console.log(event)
    const state = this.state;
    let nextOrderId = parseInt(this.state.nextOrderId)
    nextOrderId++;
    state.order.orderItemList.push(
      {
        id: nextOrderId, count: 0,
        product: item
      }
    )

    this.setState(state);
  }

  render() {
    const date = new Date(this.state.order.creation).toString()
    return (
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <div className='card p-2'>
          <img className='card-img-top' src={logo} alt={this.state.order.name}/>
          <div className='card-block'>
            <h4 className='card-title'>{this.state.order.name}</h4>

            <ItemList items={this.state.order.orderItemList}
                      allProducts={this.props.allProducts}
                      addItem={this.addItem}/>

            <div className='card-footer mt-2'>
              <small className='text-muted'> {date} </small>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

