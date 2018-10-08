import React from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../utils/capitalize'

const FormPost = ({categories}) => (
  <form className="form-post">
    <div>
      <input placeholder="Title of Post" />
      <div className="user">
        <input placeholder="User" />
        <select defaultValue={null}>
          <option disabled value="null">
            Category
          </option>
          {categories.length && categories.map(category => (
            <option value={category.name} key={category.name}>{capitalize(category.name)}</option>
          ))}
        </select>
      </div>
      <textarea placeholder="Post..." />
      <button>Submit</button>
    </div>
  </form>
);

const mapStateToProps = ({categories}) => ({
  categories
})

export default connect(mapStateToProps)(FormPost);
