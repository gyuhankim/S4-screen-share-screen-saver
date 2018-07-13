import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      hideMessage: true,
      themes: ['white', 'black', 'blue', 'orange', 'red'],
      activeTheme: 'white'
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.message) {
      this.setState({
        hideMessage: false
      })
    }
  }

  handleMessageClick() {
    this.setState({
      hideMessage: true
    })
  }

  handleInput(val) {
    this.setState({
      message: val
    })
  }

  handleThemeClick(val) {
    this.setState({
      activeTheme: val
    })
  }

  render() {

    const buttons = this.state.themes.map((theme, index) => {
      return (
        <button key={index} className={theme} onClick={() => this.handleThemeClick(theme)}/>
      )
    })

    if (this.state.hideMessage) {
      return (
        <div className={`container`}>
          <div className={`s4-container`}>
  
            <form>
              <input onChange={(val) => this.handleInput(val.target.value)} required>
              </input>
              <button type="submit" onClick={(e) => this.handleSubmit(e)}>
                brb
              </button>
            </form>

            <div className="theme-picker">

              {buttons}

            </div>

          </div>
        </div>
      );
    }
    return (
      <div className="s4-container">
        <div className="s4">
          <a href="#" onClick={() => this.handleMessageClick()}>
            {this.state.message}
          </a>
        </div>
      </div>
    )
  }
}

export default App;
