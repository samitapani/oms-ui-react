import React, {Component} from 'react';
import ItemList from './ItemList.js'
import logo from '../logo.svg';
import {
  Button, Card, CardBlock, CardFooter, CardImg, CardTitle, Input, Label, InputGroup,
  InputGroupAddon
} from 'reactstrap'

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order,
      itemId: 1,
      editMode: false,
    }
    this.addItem = this.addItem.bind(this);
    this.onOrderNameChange = this.onOrderNameChange.bind(this);
    this.changeEditMode = this.changeEditMode.bind(this);
  }

  changeEditMode(event) {
    const state = this.state;
    state.editMode = !this.state.editMode
    this.setState(state)
  }

  addItem(event, item) {
    const state = this.state;
    state.itemId += 1;
    state.order.orderItemList.push(
      {
        id: state.itemId, count: 1,
        product: item
      }
    )
    this.setState(state);
  }
  onOrderNameChange(event) {
    const state = this.state;
    state.order.name = event.target.value
    this.setState(state)
  }

  render() {
    const date = new Date(this.state.order.creation).toString()
    return (
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <Card>
          <Button onClick={this.changeEditMode}>{(this.state.editMode) ? "Save" : "Edit"}</Button>
          <CardImg top src={logo} alt={this.state.order.name}/>
          <CardBlock>
            <CardTitle>

              <InputGroup>
                <Input type="text" id="orderName" placeholder="Give name for the order"
                     value={this.state.order.name}
                     onChange={this.onOrderNameChange}
                     disabled={(this.state.editMode) ? "" : "disabled"}
              />
              </InputGroup>

            </CardTitle>

            <ItemList items={this.state.order.orderItemList}
                      allProducts={this.props.allProducts}
                      addItem={this.addItem}
                      editMode={this.state.editMode}
            />

            <CardFooter className='text-muted'>
              {date}
            </CardFooter>

          </CardBlock>
        </Card>
      </div>
    )
  }
}

