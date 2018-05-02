import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      users: []
    }
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user => <li key={user.id}>{user.userName}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
