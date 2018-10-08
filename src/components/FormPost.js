import React from 'react';

const FormPost = () => (
  <form className="form-post">
    <div>
      <input placeholder="Title of Post" />
      <div className="user">
        <input placeholder="User" />
        <select>
          <option disabled value="" selected>
            Category
          </option>
        </select>
      </div>
      <textarea placeholder="Post..." />
    </div>
  </form>
);

export default FormPost;
