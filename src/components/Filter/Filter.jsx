import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.titel}>
      Search
      <input
        type="text"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
