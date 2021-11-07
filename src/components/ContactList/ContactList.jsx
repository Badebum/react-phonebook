import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contact, onDeleteContact }) => (
  <ul className={styles.container}>
    {contact.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <p>
          {name} {number}
        </p>

        <button
          type="button"
          className={styles.button}
          onClick={() => onDeleteContact(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
