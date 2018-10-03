import React from 'react';
import { FiThumbsUp, FiThumbsDown, FiUser } from 'react-icons/fi';

const Comment = ({ author, body, voteScore }) => (
  <div className="comment">
    <div className="comment-devider">
      <div className="line" />
    </div>
    <div className="comment-info">
      <div className="comment-author">
        <FiUser /> {author}
      </div>
      <div className="comment-body">{body}</div>
      <div className="comment-footer">
        <FiThumbsUp />
        <span>{voteScore}</span>
        <FiThumbsDown />
      </div>
    </div>
  </div>
);

export default Comment;
