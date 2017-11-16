import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    username: 'User 2'
  }

  changeNameHandler = (e) => {
    let username = e.target.value;
    this.setState({ username });
  }

  render() {
    let style = {
      input: {
        border: '2px solid'
      },
      output: {
        fontStyle: 'italic'
      }
    }

    return (
      <div className="App">
        <h1>Challenge</h1>
        <UserInput change={this.changeNameHandler} style={style.input} />
        <UserOutput username="User 1" style={style.output} />
        <UserOutput username={this.state.username} style={style.output} />
      </div>
    );
  }
}

export default App;
