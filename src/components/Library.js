import React from 'react';

import Form from './Form';
import List from './List';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.submitForm = this.submitForm.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  submitForm(book) {
    this.setState({ books: [...this.state.books, book] });
  }

  deleteItem(book) {
    const { books } = this.state;
    this.setState({
      books: books.filter((item) => {
        return item !== book;
      }),
    });
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.submitForm} />
        <List bookData={this.state.books} submitDelete={this.deleteItem} />
      </div>
    );
  }
}

export default Library;
