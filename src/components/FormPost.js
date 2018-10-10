import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../utils/capitalize';
import { uuid } from '../utils/uuid';
import { FiX } from 'react-icons/fi';
import { changePostModalState, savePostApi } from '../actions';
import serializeForm from 'form-serialize';
import moment from 'moment';

class FormPost extends Component {
  state = {
    id: uuid(),
    title: '',
    author: '',
    category: '',
    body: '',
    timestamp: moment().format('x'),
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, {
      hash: true,
    });

    this.props.changePostModalState(false);
    values.timestamp = parseFloat(values.timestamp);
    this.props.savePostApi(values);
  };

  handleChange = (prop, e) => {
    this.setState({
      [prop]: e.target.value,
    });
  };

  render() {
    const { categories, changePostModalState } = this.props;

    return (
      <form
        className="form-post"
        onSubmit={e => this.handleSubmit(e)}
        id="form-post"
      >
        <div>
          <button
            className="close"
            type="button"
            onClick={() => changePostModalState(false)}
          >
            <FiX />
          </button>
          <input type="hidden" name="id" value={this.state.id} />
          <input type="hidden" name="timestamp" value={this.state.timestamp} />
          <input
            placeholder="Title of Post"
            name="title"
            onChange={e => this.handleChange('title', e)}
          />
          <div className="user">
            <input
              placeholder="Author"
              name="author"
              onChange={e => this.handleChange('author', e)}
            />
            <select
              defaultValue={null}
              name="category"
              onChange={e => this.handleChange('category', e)}
            >
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
          <textarea
            placeholder="Post..."
            name="body"
            onChange={e => this.handleChange('body', e)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories,
});

const mapDispatchToProps = dispatch => ({
  changePostModalState: bool => dispatch(changePostModalState(bool)),
  savePostApi: post => dispatch(savePostApi(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPost);
