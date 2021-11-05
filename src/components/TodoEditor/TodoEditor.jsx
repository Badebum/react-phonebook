import React, { Component } from 'react';

class TodoEditor extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="message"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.handleChange}
          title={this.state.message}
          required
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={this.handleChange}
          title={this.state.number}
          required
        />
        <button type="submit">save contact</button>
      </form>
    );
  }
}

export default TodoEditor;
