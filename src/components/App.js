import React, { Component } from 'react';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <div className="wrapper">
            Aqui
          </div>
        </div>
      </div>
    );
  }
}

export default App;
