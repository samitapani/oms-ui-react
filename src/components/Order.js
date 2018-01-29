import React, {Component} from 'react';
import ItemList from './ItemList.js'
import logo from '../logo.svg';
import {Card, CardImg, CardBlock, CardFooter, CardTitle} from 'reactstrap'

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order,
      itemId: props.itemId,
      itemId: 1000 // debug
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(event, item) {
    const state = this.state;
    let nextOrderId = parseInt(this.state.itemId)
    nextOrderId++;
    state.order.orderItemList.push(
      {
        id: nextOrderId, count: 1,
        product: item
      }
    )
    this.setState(state);
  }

  render() {
    const date = new Date(this.state.order.creation).toString()
    return (
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <Card>
          <CardImg top src={logo} alt={this.state.order.name}/>
          <CardBlock>

            <CardTitle>{this.state.order.name}</CardTitle>

            <ItemList items={this.state.order.orderItemList}
                      allProducts={this.props.allProducts}
                      addItem={this.addItem}/>

            <CardFooter className='text-muted'>
              {date}
            </CardFooter>

          </CardBlock>
        </Card>
      </div>
    )
  }
}

