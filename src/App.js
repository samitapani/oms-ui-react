import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import logo from './logo.svg'

class OrderItemList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }

    this.handleCountChange = this.handleCountChange.bind(this)
  }

  handleCountChange(event) {
    console.log(event.target.value)
    this.setState({count: event.target.value})
  }

  render() {
    const items = (
      <div>
        {this.props.items.map((order) =>
          <div key={order.id} className="row">
            <h4>{order.product.name}</h4>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">-</span>
              </div>
              <input type="number" className="form-control" value={order.count}
                     onChange={this.handleCountChange}/>
              <div className="input-group-append">
                <span className="input-group-text">+</span>
              </div>

              <input type="text" className="form-control" value={order.product.price} disabled/>
              <div className="input-group-append">
                <span className="input-group-text">€</span>
              </div>
            </div>
            {/*row*/}
          </div>
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

function Order(props) {
  const date = new Date(props.order.creation).toString()
  return (
    <div className='col-sm-6 py-4'>
      <div className='card p-4'>
        <img className='card-img-top' src={logo} alt={props.order.name}/>
        <div className='card-block'>
          <h4 className='card-title'>{props.order.name}</h4>
          <div className="card-text">
            <OrderItemList key={props.order.orderItemList.id} items={props.order.orderItemList}/>
          </div>
          <div className='card-footer'>
            <small className='text-muted'> {date} </small>
          </div>
        </div>
      </div>
    </div>
  )
}

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

  componentDidMount() {
    axios.get('http://localhost:8090/findPaged?name=Fi&page=0&size=10')
      .then((data) => {
        this.setState({orders: data.data.content})
      })
      .catch(err => {
        console.log(err)
      })


  }
}

export default App
