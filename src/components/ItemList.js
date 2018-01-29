import React, {Component} from 'react';
import Item from './Item.js';

export default class OrderItemList extends Component {

  constructor(props) {
    super(props)
    this.addItem2 = this.addItem2.bind(this);
  }

  addItem2(event) {
    this.props.addItem(event);
  }

  render() {
    const buttons = (
      <div className="card-text">
        {this.props.allProducts.map((item) =>
          <button
            className="btn col-sm-12 mb-2"
            onClick={(event) => this.props.addItem(event, item)}
            key={item.id}>{item.name}
          </button>
        )}
      </div>
    )

    const items = (
      <div className="card-text">
        {this.props.items.map((item) =>
          <Item key={item.id} item={item}/>
        )}
      </div>
    )
    return (
      <div>
        {items}
        {buttons}
      </div>
    )
  }

}
