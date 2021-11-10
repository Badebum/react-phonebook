import React, { Component } from 'react';
import shortid from 'shortid';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor';
import Filter from './components/Filter';
import styles from './App.module.css';
import Modal from './components/BackDrop/Modal'
// import contact from './contact.json';

class App extends Component {
  state = {
    contact: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
     ],
    filter: '',
    showModal: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contact !== prevState.contact) {
      localStorage.setItem('contact', JSON.stringify(this.state.contact));
    }
  }

  componentDidMount() {
    const contact = localStorage.getItem('contact');
    const parsedContact = JSON.parse(contact);

    if (parsedContact) {
      this.setState({ contact: parsedContact });
    }
  }

toggleModal = () => {
  this.setState(({showModal}) => ({showModal: !showModal}))
}

  addContact = (contactFormState) => {
    const { name, number } = contactFormState;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const isRepeat = this.state.contact.find(
      ({ name }) => name === contactFormState.name);
    
isRepeat ? alert(`{name} is alredy in contacts`) : 
this.setState((prevState) => ({contact: [contact, ...prevState.contact]}))
  
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contact: prevState.contact.filter(({id}) => id !== contactId),
    }));
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
    const { filter, showModal } = this.state;

    const visibleContact = this.getVisibleContact();

    return (
      
        <div className={styles.container}>
          <button type='button' onClick={this.toggleModal}> Open modal</button>
          {showModal && <Modal onClose={this.toggleModal}>
            <h1>thisModalcontent</h1>
            <button type='button' onClick={this.toggleModal}> Close modal</button>
         
            </Modal>
            }
          
          <h1>Phonebook</h1>
          <ContactEditor addContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />

          <ContactList
            contact={visibleContact}
            deleteContact={this.deleteContact}
          />
        </div>
     
    );
  }
}

export default App;
