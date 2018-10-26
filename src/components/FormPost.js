import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../utils/capitalize';
import { uuid } from '../utils/uuid';
import { FiX } from 'react-icons/fi';
import { changePostModalState, savePostApi, editPost } from '../actions';
import serializeForm from 'form-serialize';
import moment from 'moment';

class FormPost extends Component {
  state = {
    id: this.props.editablePost.id || uuid(),
    title: this.props.editablePost.title || '',
    author: this.props.editablePost.author || '',
    category: this.props.editablePost.category || '',
    body: this.props.editablePost.body || '',
    timestamp: this.props.editablePost.timestamp || moment().format('x'),
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, {
      hash: true,
    });

    if(!values.title) return alert('Please, write a Title');
    if(!this.state.author && !values.author) return alert('Please, write a Author');
    if(!values.body) return alert('Please, write a Post');

    this.props.changePostModalState(false);
    values.timestamp = parseFloat(values.timestamp);


    if(this.props.editablePost.id) {
      this.props.editPost(values.id, values.title, values.body)
    } else {
      this.props.savePostApi(values);
    }
  };

  handleChange = (prop, e) => {
    this.setState({
      [prop]: e.target.value,
    });
  };

  render() {
    const { categories, changePostModalState, editablePost } = this.props;

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
          <input type="hidden" name="id" value={editablePost.id || this.state.id} />
          <input type="hidden" name="timestamp" value={editablePost.timestamp || this.state.timestamp} disabled={editablePost.id} />
          <input
            placeholder="Title of Post"
            name="title"
            onChange={e => this.handleChange('title', e)}
            value={this.state.title}
          />
          <div className="user">
            <input
              placeholder="Author"
              name="author"
              onChange={e => this.handleChange('author', e)}
              value={this.state.author}
              disabled={editablePost.id} 
            />
            <select
              defaultValue={editablePost.category || null}
              name="category"
              onChange={e => this.handleChange('category', e)}
              disabled={editablePost.id}
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
            value={this.state.body}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ categories, postReducer }) => ({
  categories,
  editablePost: postReducer.editablePost,
});

const mapDispatchToProps = dispatch => ({
  changePostModalState: bool => dispatch(changePostModalState(bool)),
  savePostApi: post => dispatch(savePostApi(post)),
  editPost: (id, title, body) => dispatch(editPost(id, title, body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPost);
