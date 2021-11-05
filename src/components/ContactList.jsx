import React from 'react';
import styles from './TodoList.module.css';

const ContactList = ({ contact, onDeleteTodo }) => (
  <ul>
    {contact.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <p>
          {name} {number}
        </p>

        <button
          type="button"
          className={styles.button}
          onClick={() => onDeleteTodo(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
