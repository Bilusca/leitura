import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions';
import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);
    return (
        <div className="post-list">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchAllPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
