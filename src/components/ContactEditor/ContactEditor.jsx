import React, { Component } from 'react';
import styles from './Contact.module.css';

class ContactEditor extends Component {
  state = {
    message: ' ',
    number: ' ',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message, this.state.number);

    this.setState({ message: ' ', number: ' ' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <p>First name</p>
        <input
          type="text"
          name="message"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.handleChange}
          title={this.state.message}
          required
          className={styles.input}
        />
        <p>Last name</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={this.handleChange}
          title={this.state.number}
          required
          className={styles.input}
        />

        <button type="submit" className={styles.sub_btn}>
          save contact
        </button>
      </form>
    );
  }
}

export default ContactEditor;
