import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { capitalize } from '../utils/capitalize';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { categories } = this.props;

    return (
      <header className="app-header">
        <div className="wrapper">
          <h1>Readable</h1>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            {categories &&
              categories.map(category => (
                <li key={category.path}>
                  <Link to={`/${category.path}`}>
                    {capitalize(category.name)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchCategories()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
