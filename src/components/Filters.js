import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderBy, filterChangeType } from '../actions';

class Filters extends Component {
  componentDidMount() {
    this.props.filterChangeType(this.props.type);
  }

  render() {
    const { type, orderLists, orderBy } = this.props;

    return (
      <div className="order-selects">
        <div className="order-by">
          Order {`${type.toUpperCase()}S`} by:
          <select
            onChange={e => orderBy(type, e.target.value, orderLists[type].order)}
            defaultValue={orderLists[type].selectedOrder || 'null'}
          >
            <option value="">None</option>
            {orderLists[type] &&
              orderLists[type].list.length &&
              orderLists[type].list.map(order => (
                <option key={order.id} value={order.id}>
                  {order.label}
                </option>
              ))}
          </select>
        </div>
        Order:
        <div className="order">
          <select
            onChange={e => orderBy(type, orderLists[type].selectedOrder, e.target.value)}
            defaultValue={orderLists[type].order || 'null'}
          >
            <option value="">None</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ filterReducer }) => ({
  orderLists: filterReducer.orderLists,
  typeOfFilter: filterReducer.typeOfFilter,
});

const mapDispatchToProps = dispatch => ({
  orderBy: (typeOfFilter, selectedOrder, order) =>
    dispatch(orderBy(typeOfFilter, selectedOrder, order)),
  filterChangeType: typeOfFilter => dispatch(filterChangeType(typeOfFilter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
