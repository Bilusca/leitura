import React from 'react';
import {
  FiThumbsUp,
  FiThumbsDown,
  FiUser,
  FiEdit,
  FiTrash2,
} from 'react-icons/fi';
import {
  voteComment,
  deleteComment,
  changeCommentModalState,
} from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';

const Comment = ({
  author,
  body,
  voteScore,
  timestamp,
  id,
  parentId,
  voteComment,
  deleteComment,
  changeCommentModalState,
}) => (
  <div className="comment">
    <div className="comment-devider">
      <div className="line" />
    </div>
    <div className="comment-info">
      <div className="comment-author">
        <div>
          <FiUser /> {author}
        </div>
        <div className="timestamp">
          {moment(timestamp).format('DD/MM/YYYY')}
          <button
            className="edit"
            onClick={() =>
              changeCommentModalState(true, {
                author,
                body,
                voteScore,
                timestamp,
                id,
                parentId,
              })
            }
          >
            <FiEdit />
          </button>
          <button className="remove" onClick={() => deleteComment(id)}>
            <FiTrash2 />
          </button>
        </div>
      </div>
      <div className="comment-body">{body}</div>
      <div className="comment-footer">
        <FiThumbsUp onClick={() => voteComment('upVote', id)} />
        <span>{voteScore}</span>
        <FiThumbsDown onClick={() => voteComment('downVote', id)} />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  voteComment: (option, id) => dispatch(voteComment(option, id)),
  deleteComment: id => dispatch(deleteComment(id)),
  changeCommentModalState: (bool, editable = {}) =>
    dispatch(changeCommentModalState(bool, editable)),
});

export default connect(
  null,
  mapDispatchToProps
)(Comment);
