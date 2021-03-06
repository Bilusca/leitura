import React from 'react';
import { capitalize } from '../utils/capitalize';
import {
  FiMessageCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiUser,
  FiTrash2,
  FiEdit,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { votePost, deletePost, changePostModalState } from '../actions';
import { connect } from 'react-redux';

function renderComentCount(count) {
  return count !== 0 ? <span className="count">{count}</span> : '';
}

const Post = ({
  id,
  title,
  body,
  category,
  author,
  commentCount,
  voteScore,
  timestamp,
  votePost,
  deletePost,
  changePostModalState,
}) => (
  <div className="post">
    <div className="post-header">
      <Link to={`/${category}/${id}`}>
        <h2>{title}</h2>
      </Link>
      <span>
        {moment(timestamp).format('DD/MM/YYYY')}
        <button
          className="edit"
          onClick={() =>
            changePostModalState(true, {
              id,
              title,
              body,
              author,
              category,
              timestamp,
            })
          }
        >
          <FiEdit />
        </button>
        <button className="remove" onClick={() => deletePost(id)}>
          <FiTrash2 />
        </button>
      </span>
    </div>
    <div className="post-body">
      <span className="post-category">{capitalize(category)}</span>
      <p>{body}</p>
    </div>
    <div className="post-footer">
      <div>
        <span className="comments">
          <Link to={`/${category}/${id}`} style={{ textDecoration: 'none' }}>
            <FiMessageCircle /> {renderComentCount(commentCount)}
          </Link>
        </span>
        <div className="votes">
          <FiThumbsUp onClick={() => votePost(id, 'upVote')} />
          <span>{voteScore}</span>
          <FiThumbsDown onClick={() => votePost(id, 'downVote')} />
        </div>
      </div>
      <div className="author">
        <FiUser />
        {author}
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  votePost: (id, vote) => dispatch(votePost(id, vote)),
  deletePost: id => dispatch(deletePost(id)),
  changePostModalState: (bool, editable) =>
    dispatch(changePostModalState(bool, editable)),
});

export default connect(
  null,
  mapDispatchToProps
)(Post);
