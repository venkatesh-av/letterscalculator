import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeCount = event => {
    const val = event.target.value.length
    console.log(val)
    this.setState({count: val})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-background">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-edit2"
          />

          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <label htmlFor="input-ele">Enter the phrase</label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input-edit"
            onChange={this.changeCount}
            id="input-ele"
          />
          <div className="button-div">
            <p className="div-iner">No.of letters: {count}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-edit"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
