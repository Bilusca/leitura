import React, { Component, Fragment } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import {
  fetchPostDetail,
  fetchCommentsById,
  changeCommentModalState,
} from '../actions';
import Comment from './Comment';
import Filters from './Filters';
import * as _ from 'lodash';
import FormComment from './FormComment';
import Modal from 'react-modal';

class PostDetail extends Component {
  componentWillMount() {
    const { match } = this.props;
    this.props.fetchPostDetail(match.params.postId);
    this.props.fetchCommentsById(match.params.postId);
  }

  render() {
    const {
      post,
      comments,
      selectedOrder,
      order,
      commentModalState,
      changeCommentModalState,
    } = this.props;
    return (
      <div className="post-list">
        {post ? (
          <Fragment>
            <div className="post-actions">
              <Filters type="comment" />
              <button onClick={() => changeCommentModalState(true)}>
                New Comment
              </button>
            </div>
            <Post {...post} />
            {_.orderBy(comments, [selectedOrder], [order]).map(commment => (
              <Comment key={commment.id} {...commment} />
            ))}
            <Modal
              className="modal"
              overlayClassName="overlay"
              isOpen={commentModalState}
              contentLabel="Modal"
              ariaHideApp={false}
            >
              <FormComment parentId={post.id} />
            </Modal>
          </Fragment>
        ) : (
          <div className="no-posts">
            This post no longer exist{' '}
            <span role="img" aria-label="sad face emoji">
              🙁
            </span>
          </div>
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
    commentModalState: commentReducer.commentModalState,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPostDetail: postId => dispatch(fetchPostDetail(postId)),
  fetchCommentsById: postId => dispatch(fetchCommentsById(postId)),
  changeCommentModalState: bool => dispatch(changeCommentModalState(bool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
