import React, {Component} from 'react';
import './App.css';
import Order from './components/Order.js'
import axios from 'axios';

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
      ]
    }
  }

  render() {
    let orders = []
    this.state.orders.forEach(x => orders.push(<Order key={x.id} order={x}/>))

    return (
      <div className='container'>
        <div className='row'>
          <div className='card-deck'>
            {orders}
          </div>
        </div>
      </div>
    )
  }

  async componentDidMount() {
    this.fetchData()
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
