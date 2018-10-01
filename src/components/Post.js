import React from 'react';
import { capitalize } from '../utils/capitalize';
import { FiMessageCircle, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

function renderComentCount(count) {
  return count !== 0 ? <span className="count">{count}</span> : '';
}

const Post = ({ title, body, category, author, commentCount, voteScore }) => (
  <div className="post">
    <div className="post-header">{title}</div>
    <div className="post-body">
      <span className="post-category">{capitalize(category)}</span>
      <p>{body}</p>
    </div>
    <div className="post-footer">
      <div>
        <span className="comments">
          <FiMessageCircle /> {renderComentCount(commentCount)}
        </span>
        <div>
          <FiThumbsUp />
          {voteScore}
          <FiThumbsDown />
        </div>
      </div>
      <div>{author}</div>
    </div>
  </div>
);

export default Post;
