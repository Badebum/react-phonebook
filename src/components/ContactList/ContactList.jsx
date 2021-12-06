import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import * as actions from '../../redux/contact/contact-actions';
import { connect } from 'react-redux';

const ContactList = ({ contact, deleteContact }) => (
  <ul className={styles.container}>
    {contact.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <p>
          {name} {number}
        </p>

        <button
          type="button"
          className={styles.button}
          onClick={() => deleteContact(id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func,
};

const getVisibleContact = (allContact, filter) => {
  const normFilter = filter.toLowerCase();

  return allContact.filter(({ name }) =>
    name.toLowerCase().includes(normFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contact: getVisibleContact(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
