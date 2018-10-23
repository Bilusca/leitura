import React from 'react';
import { FiThumbsUp, FiThumbsDown, FiUser, FiEdit, FiTrash2 } from 'react-icons/fi';
import moment from 'moment';

const Comment = ({ author, body, voteScore, timestamp }) => (
  <div className="comment">
    <div className="comment-devider">
      <div className="line" />
    </div>
    <div className="comment-info">
      <div className="comment-author">
        <div><FiUser /> {author}</div>
        <div className="timestamp">
          {moment(timestamp).format("DD/MM/YYYY")} 
          <button className="edit">
            <FiEdit />
          </button>        
          <button className="remove">
            <FiTrash2 />  
          </button>        
        </div>
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
