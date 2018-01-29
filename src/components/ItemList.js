import React, {Component} from 'react';
import Item from './Item.js';
import {Button, CardText} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import euro from '@fortawesome/fontawesome-free-solid/faEuroSign'

export default class OrderItemList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const buttons = (
      <CardText>
        {this.props.allProducts.map((item) =>
          <div className="input-group mb-3">
            <Button
              className="btn col-sm-12 mb-2"
              onClick={(event) => this.props.addItem(event, item)}
              key={item.id}>{item.name}
            </Button>
          </div>
            )}
      </CardText>
    )

    const items = (
      <CardText>
        {this.props.items.map((item) =>
          <Item key={item.id} item={item}/>
        )}
      </CardText>
    )
    return (
      <div>
        {items}
        {buttons}
      </div>
    )
  }

}
