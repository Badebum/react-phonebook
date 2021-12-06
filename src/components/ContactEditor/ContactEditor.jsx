import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Contact.module.css';
import * as actions from '../../redux/contact/contact-actions';

class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChenge = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    // this.props.onSubmit(this.state.name, this.state.number);
    if (this.state.name !== '') {
      this.props.addContact(this.state);
      this.reset();
      return;
    }
    alert('ERROR');
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <p>First name</p>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={this.handlerChenge}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <p>Last name</p>
        <input
          type="tel"
          className={styles.input}
          value={number}
          onChange={this.handlerChenge}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button type="submit" className={styles.sub_btn}>
          save contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: contactForm => dispatch(actions.addContact(contactForm)),
});

export default connect(null, mapDispatchToProps)(ContactEditor);
