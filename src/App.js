import React, {Component} from 'react';
import './App.css';
import Order from './components/Order.js'
import axios from 'axios';

const orderData = require('./static/sample-data')

class App extends Component {
  constructor(props) {
    super(props)
    // model of state from server response
    this.state = {
      orders: [
        {
          id: "", name: "", creation: "", orderItemList: [
            {
              id: "", count: "",
              product: {
                id: "", name: "", price: ""
              }
            }
          ]
        }
      ],
      allProducts: [
        {
          id: "", name: "", price: ""
        }
      ]
    }
  }

  render() {
    let orders = []
    this.state.orders.forEach(x => orders.push(<Order key={x.id} order={x} allProducts={this.state.allProducts}/>))

    return (
      <div className='container'>
        <div className='card-deck'>
          {orders}
        </div>
      </div>
    )
  }

  async componentDidMount() {
    const allProducts = [
      {
        "id": 1,
        "name": "Onki",
        "price": 99.99
      }, {
        "id": 2,
        "name": "Kela",
        "price": 29.9
      }, {
        "id": 3,
        "name": "Matoja",
        "price": 0.29
      }
    ]

    this.setState({orders: orderData.content, allProducts: allProducts})
  }

  async fetchData() {
    await axios.get('http://localhost:8090/findPaged?name=Fi&page=0&size=10')
      .then((data) => {
        this.setState({orders: data.data.content})
      })
      .catch(err => {
        console.log(err)
      })
  }

}

export default App
