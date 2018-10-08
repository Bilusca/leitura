import { ORDER_BY, CHANGE_TYPE_OF_FILTER } from './types';

const INITIAL_STATE = {
  orderLists: {
    post: {
      list: [
        {
          id: 'voteScore',
          label: 'Vote Score',
        },
        {
          id: 'timestamp',
          label: 'Date',
        },
        {
          id: 'author',
          label: 'Author',
        },
        {
          id: 'title',
          label: 'Title',
        },
      ],
      selectedOrder: null,
      order: null,
    },
    comment: {
      list: [
        {
          id: 'voteScore',
          label: 'Vote Score',
        },
        {
          id: 'timestamp',
          label: 'Date',
        },
        {
          id: 'author',
          label: 'Author',
        },
      ],
      selectedOrder: null,
      order: null,
    },
  },
  typeOfFilter: null,
};

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_BY:
      return {
        ...state,
        orderLists: {
          ...state.orderLists,
          [action.typeOfFilter]: {
            ...state.orderLists[action.typeOfFilter],
            selectedOrder: action.selectedOrder,
            order: action.order,
          },
        },
      };
    case CHANGE_TYPE_OF_FILTER:
      if (state.typeOfFilter !== action.typeOfFilter) {
        return {
          ...state,
          typeOfFilter: action.typeOfFilter,
        };
      }
      return state;
    default:
      return state;
  }
};
