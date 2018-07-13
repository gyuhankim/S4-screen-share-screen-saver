import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      hideMessage: true
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      hideMessage: false
    })
  }

  handleInput(val) {
    this.setState({
      message: val
    })
  }

  render() {

    if (this.state.hideMessage) {
      return (
        <div className="container">
          <div className="s4-container">
  
            <form>
              <input onChange={(val) => this.handleInput(val.target.value)}>
              </input>
              <button type="submit" onClick={(e) => this.handleSubmit(e)}>
                Take a break
              </button>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div className="s4-container">
        <div className="s4">
          <a href="/">
            {this.state.message}
          </a>
        </div>
      </div>
    )
  }
}

export default App;
