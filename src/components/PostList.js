import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, fetchAllPostsByCategory } from '../actions';
import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    if (this.props.match.path !== '/') {
      const { match } = this.props;
      this.props.fetchPostsByCategory(match.params.category);
    } else {
      this.props.fetchPosts();
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="post-list">
        {posts && posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchAllPosts()),
  fetchPostsByCategory: category => dispatch(fetchAllPostsByCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
