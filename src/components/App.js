import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';

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
                path="/:category"
                exact
                component={history => <PostList {...history} />}
              />
              <Route
                path="/:category/:postId"
                exact
                component={history => <PostDetail {...history} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
