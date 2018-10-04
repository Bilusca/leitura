import React, { Component, Fragment } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import { fetchPostDetail, fetchCommentsById } from '../actions';
import Comment from './Comment';
import ReactLoading from 'react-loading';
import Filters from './Filters';
import * as _ from 'lodash';

class PostDetail extends Component {
  componentWillMount() {
    const { match } = this.props;
    this.props.fetchPostDetail(match.params.postId);
    this.props.fetchCommentsById(match.params.postId);
  }

  render() {
    const { post, comments, selectedOrder, order } = this.props;
    return (
      <div className="post-list">
        <div className="post-actions">
          <Filters type="comment" />
          <div>New Post</div>
        </div>
        {post ? (
          <Fragment>
            <Post {...post} />
            {_.orderBy(comments, [selectedOrder], [order]).map(commment => (
              <Comment key={commment.id} {...commment} />
            ))}
          </Fragment>
        ) : (
          <ReactLoading type="spin" color="#0078d4" />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ postReducer, commentReducer, filterReducer }) => {
  const commentFilters = filterReducer.orderLists['comment'];

  return {
    post: postReducer.activePost.post,
    comments: commentReducer.commentList.comments,
    order: commentFilters.order,
    selectedOrder: commentFilters.selectedOrder,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPostDetail: postId => dispatch(fetchPostDetail(postId)),
  fetchCommentsById: postId => dispatch(fetchCommentsById(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
