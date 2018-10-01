import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={PostList} />
              <Route
                exact
                path="/:category"
                component={props => <PostList {...props} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
