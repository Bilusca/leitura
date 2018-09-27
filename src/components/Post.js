import React from 'react';

const Post = ({title, body}) => (
  <div className="post">
    <div className="post-header">
      {title}
    </div>
    <div className="post-body">
      {body}
    </div>
    <div className="post-footer">

    </div>
  </div>
);

export default Post;
