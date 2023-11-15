// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncreaseNum = () => {
    const randomNumber = this.getRandomNum()
    this.setState(previousStatus => ({
      count: previousStatus.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading"> Count {count} </h1>
          <p className="category"> Count is {text} </p>
          <button className="button" type="button" onClick={this.onIncreaseNum}>
            Increment
          </button>
          <p className="note"> *Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
