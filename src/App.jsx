import React, { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor';
import Filter from './components/Filter';
import styles from './App.module.css';
// import Modal from './components/BackDrop/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  // toggleModal = () => {
  //   this.setState(({showModal}) => ({showModal: !showModal}))
  // }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contact: prevState.contact.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    // const { showModal } = this.state;

    return (
      <div className={styles.container}>
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>this Modal content</h1>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )} */}

        <h1>Phonebook</h1>
        <ContactEditor />

        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    );
  }
}

export default App;
