import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/ADD', contactEditorState => {
  return {
    payload: {
      id: shortid.generate(),
      name: contactEditorState.name,
      number: contactEditorState.number,
    },
  };
});

export const deleteContact = createAction('contact/delete');

export const changeFilter = createAction('contact/changeFilter');
