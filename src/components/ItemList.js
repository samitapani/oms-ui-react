import React, {Component} from 'react';
import Item from './Item.js';

export default class OrderItemList extends Component {

  constructor(props) {
    super(props)
  }
  render() {
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
      </div>
    )
  }

}
