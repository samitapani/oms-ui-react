import React, {Component} from 'react';
import Item from './Item.js';
import {Button, CardText} from 'reactstrap';

export default class OrderItemList extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const items = (
      <CardText>
        {this.props.items.map((item) =>
          <Item key={item.id} item={item} editMode={this.props.editMode}/>
        )}
      </CardText>
    )

    let buttons = []
    if (this.props.editMode) {
      buttons = (
        <CardText>
          {this.props.allProducts.map((item) =>
            <Button
              className="col-sm-12 mb-1"
              onClick={(event) => this.props.addItem(event, item)}
              key={item.id}>{item.name}
            </Button>
          )}
        </CardText>
      )
    }


    return (
      <div>
        {items}
        {buttons}
      </div>
    )
  }

}
