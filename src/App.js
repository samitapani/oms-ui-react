import React, {Component} from 'react';
import './App.css';
import Order from './components/Order.js'
import axios from 'axios';
import {Button, CardDeck, Col, Container, Row} from "reactstrap";

//const orderData = require('./static/sample-data')

class App extends Component {
  constructor(props) {
    super(props)
    // model of state from server response
    this.state = {
      orders: [
        {
          id: Number, name: String, creation: Date, orderItemList: []
        }
      ],
      allProducts: [
        {
          id: Number, name: String, price: Number
        }
      ],
      id: Number
    }
  }

  render() {
    const orders = this.state.orders.map((x, index) =>
      <Order key={x.id} orderIndex={index} order={x} allProducts={this.state.allProducts} onDeleteOrder={this.onDeleteOrder}/>
    )

    return (
      <Container>
        <CardDeck>
          {orders}
        </CardDeck>
        <Row className='mt-3 mb-5'>
          <Col className='mr-3 ml-3'>
            <Button className='col-xs-12 col-md-12 col-lg-12' onClick={(event) => this.addOrder(event)}>Add order</Button>
          </Col>
        </Row>
      </Container>
    )
  }

  addOrder(event) {
    let state = this.state;
    state.id += 1;
    state.orders.push(
      {
        id: state.id, name: "", creation: (new Date()).toUTCString(), orderItemList: []
      }
    )
    this.setState(state)
  }

  /*
  async componentDidMount() {
    const allProducts = [
      {
        "id": 1,
        "name": "Rod",
        "price": 99.99
      }, {
        "id": 2,
        "name": "Hook",
        "price": 1.99
      }, {
        "id": 3,
        "name": "Reel",
        "price": 29.99
      }, {
        "id": 4,
        "name": "Worms",
        "price": 0.29
      }
    ]

    this.setState(
      {
        id: 1,
        orders: orderData.content,
        allProducts: allProducts
      }
    )
  }
  */

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    await axios.all([
        axios.get('http://localhost:8090/orders/list-paged?page=0&size=100'),
        axios.get('http://localhost:8090/products/list-paged?page=0&size=100')
      ])
      .then(axios.spread((ordersPaged, productsPaged) => {
        this.setState(
          {
            orders: ordersPaged.data.content,
            allProducts: productsPaged.data.content,
            id:1000
          }
        )
      }))
      .catch(error => console.log(error));
  }

}
export default App
