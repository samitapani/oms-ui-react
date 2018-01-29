import React, {Component} from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import euro from '@fortawesome/fontawesome-free-solid/faEuroSign'
import minus from '@fortawesome/fontawesome-free-solid/faMinus'
import plus from '@fortawesome/fontawesome-free-solid/faPlus'
import {InputGroup} from "reactstrap";


export default class Item extends Component {

  constructor(props) {
    super(props)
    let count = props.item.count;
    this.state = {
      count: count
    }

    this.countChange = this.countChange.bind(this)
    this.incCount = this.incCount.bind(this)
    this.decCount = this.decCount.bind(this)
  }

  countChange(event) {
    this.setState({count: parseInt(event.target.value)})
  }

  incCount(event) {
    const count = parseInt(this.state.count) + 1
    this.setState({count: count})
  }

  decCount(event) {
    const count = parseInt(this.state.count) - 1
    this.setState({count: count})
  }

  render() {

    let plusButton = ""
    let minusButton = ""
    if (this.props.editMode) {
      minusButton = (
        <div className="input-group-text" onClick={this.decCount}>
          <FontAwesomeIcon icon={minus}/>
        </div>
      )

      plusButton = (
        <div className="input-group-text" onClick={this.incCount}>
          <FontAwesomeIcon icon={plus}/>
        </div>
      )
    }

    return (
      <div>
        <InputGroup className="mb-3">
          <input type="text"
                 className="form-control "
                 value={this.props.item.product.name}
                 disabled/>
          {minusButton}
          <input type="number" className="form-control"
                 value={this.state.count}
                 onChange={this.countChange}
                 disabled={(this.props.editMode) ? "" : "disabled"}
          />
          {plusButton}
          <input type="text"
                 className="form-control "
                 value={this.props.item.product.price}
                 disabled/>

          <div className="input-group-append">
            <span className="input-group-text"><FontAwesomeIcon icon={euro}/></span>
          </div>
        </InputGroup>
      </div>
    )
  }

}
