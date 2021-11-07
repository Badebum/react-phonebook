import React, { Component } from 'react';
import shortid from 'shortid';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor';
import Filter from './components/Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contact }) => ({
      contact: [newContact, ...contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contact: prevState.contact.filter(cont => cont.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contact, filter } = this.state;
    const normFilter = filter.toLowerCase();
    return contact.filter(
      contact =>
        contact.name.toLowerCase().includes(normFilter) ||
        contact.number.toLowerCase().includes(normFilter),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContact = this.getVisibleContact();

    return (
      <>
        <div className={styles.container}>
          <h1>Phonebook</h1>
          <ContactEditor onSubmit={this.addContact} />

          <h2>Contacts</h2>

          <Filter value={filter} onChange={this.changeFilter} />

          <ContactList
            contact={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
