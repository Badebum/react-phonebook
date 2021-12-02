import { combineReducers } from 'redux';
import types from './contact-types';

const contact = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  contact,
  filter,
});
