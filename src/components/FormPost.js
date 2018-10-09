import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../src';
import { capitalize } from '../utils/capitalize';
import { FiX } from 'react-icons/fi';
import { changePostModalState } from '../actions';
import serializeForm from 'form-serialize';

const handleSubmit = e => {
  e.preventDefault();
  const values = serializeForm(e.target, {
    hash: true,
  });

  store.dispatch(changePostModalState(false));
};

const FormPost = ({ categories, changePostModalState }) => (
  <form className="form-post" onSubmit={e => handleSubmit(e)} id="form-post">
    <div>
      <button
        className="close"
        type="button"
        onClick={() => changePostModalState(false)}
      >
        <FiX />
      </button>
      <input placeholder="Title of Post" name="title" />
      <div className="user">
        <input placeholder="User" name="user" />
        <select defaultValue={null} name="category">
          <option disabled value="null">
            Category
          </option>
          {categories.length &&
            categories.map(category => (
              <option value={category.name} key={category.name}>
                {capitalize(category.name)}
              </option>
            ))}
        </select>
      </div>
      <textarea placeholder="Post..." name="post" />
      <button type="submit">Submit</button>
    </div>
  </form>
);

const mapStateToProps = ({ categories }) => ({
  categories,
});

const mapDispatchToProps = dispatch => ({
  changePostModalState: bool => dispatch(changePostModalState(bool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPost);
