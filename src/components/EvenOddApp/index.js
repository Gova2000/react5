// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  change = () => {
    this.setState(pre => ({count: pre.count + rand()}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="card">
        <h1>
          Count <span>{count}</span>
        </h1>
        <p className="p">
          Count id <span>{text}</span>
        </p>
        <button type="button" onClick={this.change}>
          Increment
        </button>
        <p>
          <sup>*</sup>Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
