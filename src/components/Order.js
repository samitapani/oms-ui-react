import React, {Component} from 'react';
import ItemList from './ItemList.js'
import logo from '../logo.svg';
import {Button, Card, CardBody, CardFooter, CardImg, CardTitle, Col, Input, InputGroup, Row} from 'reactstrap'
import axios from 'axios'

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.order,
      editMode: false,
    }
    this.addItem = this.addItem.bind(this);
    this.onOrderNameChange = this.onOrderNameChange.bind(this);
    this.changeEditMode = this.changeEditMode.bind(this);
    this.changeItemCount = this.changeItemCount.bind(this);
  }

  changeItemCount(orderItemIndex, count) {
    const state = this.state
    state.order.orderItemList[orderItemIndex].count = count
    this.setState(state);
  }

  changeEditMode(event) {
    const state = this.state;
    // save
    if (state.editMode) {
      axios.post(
        'http://localhost:8090/orders/save',
        this.state.order
      )
    }
    state.editMode = !this.state.editMode
    this.setState(state)
  }

  addItem(event, item) {
    const state = this.state;
    state.order.orderItemList.push(
      {
        id: null, count: 1,
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
      <div className='col-sm-12 col-md-6 col-lg-4 mb-3'>
        <Card>
          <Row>
            <Col>
              <Button className='col-sm-12'
                      onClick={this.changeEditMode}
                      color={(this.state.editMode) ? "success" : "info"}
              >{(this.state.editMode) ? "Save" : "Edit"}
              </Button>
            </Col>
          </Row>
          <CardImg top src={logo} alt="img"/>
          <CardBody>
            <CardTitle>

              <InputGroup>
                <Input placeholder="Give name for the order"
                       value={this.state.order.name}
                       onChange={this.onOrderNameChange}
                       disabled={(this.state.editMode) ? "" : "disabled"}
                />
              </InputGroup>

            </CardTitle>

            <ItemList items={this.state.order.orderItemList}
                      allProducts={this.props.allProducts}
                      addItem={this.addItem}
                      changeItemCount={this.changeItemCount}
                      editMode={this.state.editMode}
            />

            <CardFooter className='text-muted'>
              {date}
            </CardFooter>

          </CardBody>
        </Card>
      </div>
    )
  }
}

