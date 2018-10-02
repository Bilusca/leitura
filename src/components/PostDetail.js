import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPostDetail } from '../actions';

class PostDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchPostDetail(match.params.postId);
  }

  render() {
    return <Post {...this.props.post} />;
  }
}

const mapStateToProps = ({ post }) => ({
  post,
});

const mapDispatchToProps = dispatch => ({
  fetchPostDetail: postId => dispatch(fetchPostDetail(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
