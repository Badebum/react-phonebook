import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contact-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${state.name} is already in contacts`)
      : [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
