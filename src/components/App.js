import React, { Component } from 'react';
import { getAllCategories } from '../utils/API';

class App extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    getAllCategories()
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <h1>DEU CERTO</h1>
      </div>
    );
  }
}

export default App;
