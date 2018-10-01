import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { capitalize } from '../utils/capitalize';
import { NavLink, withRouter } from 'react-router-dom';

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
              <NavLink to="/" activeClassName="active" exact>
                All
              </NavLink>
            </li>
            {categories &&
              categories.map(category => (
                <li key={category.path}>
                  <NavLink
                    to={`/${category.path}`}
                    activeClassName="active"
                    exact
                  >
                    {capitalize(category.name)}
                  </NavLink>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
