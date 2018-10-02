import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPostDetail, fetchCommentsById } from '../actions';

class PostDetail extends Component {
  componentWillMount() {
    const { match } = this.props;
    this.props.fetchPostDetail(match.params.postId);
    this.props.fetchCommentsById(match.params.postId);
  }

  render() {
    const { post } = this.props;
    return !post ? <h1>TESTE</h1> : <div className="post-list"><Post {...post} /></div>;
  }
}

const mapStateToProps = ({ postReducer, commentReducer }) => ({
  post: postReducer.activePost.post,
  comments: commentReducer.commentList.comments
});

const mapDispatchToProps = dispatch => ({
  fetchPostDetail: postId => dispatch(fetchPostDetail(postId)),
  fetchCommentsById: postId => dispatch(fetchCommentsById(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
