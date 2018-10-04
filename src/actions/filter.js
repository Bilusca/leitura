import { ORDER_BY, CHANGE_TYPE_OF_FILTER } from '../reducers/types';

export const orderBy = (typeOfFilter, selectedOrder, order) => ({
  type: ORDER_BY,
  typeOfFilter,
  selectedOrder,
  order,
});

export const filterChangeType = typeOfFilter => ({
  type: CHANGE_TYPE_OF_FILTER,
  typeOfFilter,
});
