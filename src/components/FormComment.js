import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uuid } from '../utils/uuid';
import { FiX } from 'react-icons/fi';
import {
  changeCommentModalState,
  createCommentInApi,
  editComment,
  incrementDecrementPostCommentCount,
} from '../actions';
import serializeForm from 'form-serialize';
import moment from 'moment';

class FormPost extends Component {
  state = {
    id: uuid(),
    author: this.props.editableComment.author || '',
    body: this.props.editableComment.body || '',
    timestamp: moment().format('x'),
    parentId: this.props.parentId,
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, {
      hash: true,
    });

    if (!this.state.author && !values.author)
      return alert('Please, write a Author');
    if (!values.body) return alert('Please, write a Post');

    this.props.changeCommentModalState(false);
    values.timestamp = parseFloat(values.timestamp);

    if (this.props.editableComment.id) {
      this.props.editComment(values.id, values.body, values.timestamp);
    } else {
      this.props.createCommentInApi(values);
      this.props.incrementDecrementPostCommentCount('increment');
    }
  };

  handleChange = (prop, e) => {
    this.setState({
      [prop]: e.target.value,
    });
  };

  render() {
    const { changeCommentModalState } = this.props;
    const { id, parentId, author } = this.props.editableComment;

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
            onClick={() => changeCommentModalState(false)}
          >
            <FiX />
          </button>
          <input type="hidden" name="id" value={id || this.state.id} />
          <input
            type="hidden"
            name="parentId"
            value={parentId || this.state.parentId}
            disabled={parentId}
          />
          <input type="hidden" name="timestamp" value={this.state.timestamp} />
          <div className="user">
            <input
              placeholder="Author"
              name="author"
              onChange={e => this.handleChange('author', e)}
              value={author || this.state.author}
              disabled={author}
            />
          </div>
          <textarea
            placeholder="Comment..."
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

const mapStateToProps = ({ commentReducer }) => ({
  editableComment: commentReducer.editableComment,
});

const mapDispatchToProps = dispatch => ({
  changeCommentModalState: bool => dispatch(changeCommentModalState(bool)),
  createCommentInApi: comment => dispatch(createCommentInApi(comment)),
  editComment: (id, body, timestamp) =>
    dispatch(editComment(id, body, timestamp)),
  incrementDecrementPostCommentCount: incOrDec =>
    dispatch(incrementDecrementPostCommentCount(incOrDec)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPost);
