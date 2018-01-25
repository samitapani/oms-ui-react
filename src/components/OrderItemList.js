import React, {Component} from 'react';

export default class OrderItemList extends Component {

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
