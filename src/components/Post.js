import React, { Fragment } from 'react';
import { capitalize } from '../utils/capitalize';
import {
  FiMessageCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiUser,
} from 'react-icons/fi';
import moment from 'moment';

function renderComentCount(count) {
  return count !== 0 ? <span className="count">{count}</span> : '';
}

const Post = ({
  title,
  body,
  category,
  author,
  commentCount,
  voteScore,
  timestamp,
}) => (
  <Fragment>
    <div className="post">
      <div className="post-header">
        <h2>{title}</h2>
        <span>{moment(timestamp).format('MM/DD/YYYY')}</span>
      </div>
      <div className="post-body">
        <span className="post-category">{capitalize(category)}</span>
        <p>{body}</p>
      </div>
      <div className="post-footer">
        <div>
          <span className="comments">
            <FiMessageCircle /> {renderComentCount(commentCount)}
          </span>
          <div className="votes">
            <FiThumbsUp />
            <span>{voteScore}</span>
            <FiThumbsDown />
          </div>
        </div>
        <div className="author">
          <FiUser />
          {author}
        </div>
      </div>
    </div>
    {this.props.children}
  </Fragment>
);

export default Post;
