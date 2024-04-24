import './index.css'
import {Component} from 'react'

class SpeedoMeter extends Component {
  state = {count: 0}
  onAccelerate = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }
  onApplyBrake = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-container">
        <h1 class="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <br />
        <h1 className="title">Speed is {count}mph</h1>
        <p className="title-description">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="button-container">
          <button className="accelerate-btn" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="apply-brake" onClick={this.onApplyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default SpeedoMeter
