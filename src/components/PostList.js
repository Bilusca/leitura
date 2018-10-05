import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, fetchAllPostsByCategory } from '../actions';
import Post from './Post';
import Filters from './Filters';
import Modal from 'react-modal';
import * as _ from 'lodash';

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
    const { posts, selectedOrder, order } = this.props;
    return (
      <Fragment>
        <div className="post-list">
          <div className="post-actions">
            <Filters type="post" />
            <div>New Post</div>
          </div>
          {posts.length ? (
            _.orderBy(posts, [selectedOrder], [order]).map(post => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <div className="no-posts">
              We did not find any posts{' '}
              <span role="img" aria-label="sad face emoji">
                🙁
              </span>
            </div>
          )}
        </div>
        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={true}
          contentLabel="Modal"
        >
          <form>
            <div className="">
              <input />
              <input />
              <textarea></textarea>
              <select></select>
            </div>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ postReducer, filterReducer }) => {
  const postFilters = filterReducer.orderLists['post'];

  return {
    posts: postReducer.postList.posts,
    selectedOrder: postFilters.selectedOrder,
    order: postFilters.order,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchAllPosts()),
  fetchPostsByCategory: category => dispatch(fetchAllPostsByCategory(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
