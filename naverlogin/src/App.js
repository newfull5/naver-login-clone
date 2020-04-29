import React, { Component } from 'react';
import Router from './compo/Router';

class App extends Component {
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/login');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
        <Router></Router>
        {this.state.customers ? this.state.customers.map(c => {
          return (<div>{c.id}</div>);
        }) : ""}
      </div>
    );
  }
}


export default App;
