import React, { Component } from "react"

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    const newMood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({
      mood: newMood
    })
  }

  // handleClick = () => {
  //   this.setState({
  //     mood: this.state.mood === "happy" ? "sad" : "happy"
  //   })
  // }

  render() {

    return (
      <div onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}

export default SimpleComponent 