import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uuid } from '../utils/uuid';
import { FiX } from 'react-icons/fi';
import { changeCommentModalState, createCommentInApi } from '../actions';
import serializeForm from 'form-serialize';
import moment from 'moment';

class FormPost extends Component {
  state = {
    id: uuid(),
    author: '',
    body: '',
    timestamp: moment().format('x'),
    parentId: this.props.parentId,
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, {
      hash: true,
    });

    this.props.changeCommentModalState(false);
    values.timestamp = parseFloat(values.timestamp);
    this.props.createCommentInApi(values);
  };

  handleChange = (prop, e) => {
    this.setState({
      [prop]: e.target.value,
    });
  };

  render() {
    const { changeCommentModalState } = this.props;

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
          <input type="hidden" name="id" value={this.state.id} />
          <input type="hidden" name="parentId" value={this.state.parentId} />
          <input type="hidden" name="timestamp" value={this.state.timestamp} />
          <div className="user">
            <input
              placeholder="Author"
              name="author"
              onChange={e => this.handleChange('author', e)}
            />
          </div>
          <textarea
            placeholder="Comment..."
            name="body"
            onChange={e => this.handleChange('body', e)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeCommentModalState: bool => dispatch(changeCommentModalState(bool)),
  createCommentInApi: comment => dispatch(createCommentInApi(comment)),
});

export default connect(
  null,
  mapDispatchToProps
)(FormPost);
