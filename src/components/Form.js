import React from 'react';

import FormTitle from './FormTitle';
import FormAuthor from './FormAuthor';
import FormPages from './FormPages';
import FormRead from './FormRead';
import FormSubmit from './FormSubmit';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: '',
      read: '',
    };
    this.submitForm = this.submitForm.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getAuthor = this.getAuthor.bind(this);
    this.getPages = this.getPages.bind(this);
    this.getRead = this.getRead.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.read === '') {
      throw Error('Please choose Yes or No');
    }
    this.props.handleSubmit(this.state);
  }

  getTitle(titleValue) {
    this.setState({
      title: titleValue,
    });
  }

  getAuthor(authorValue) {
    this.setState({
      author: authorValue,
    });
  }

  getPages(pagesValue) {
    this.setState({
      pages: pagesValue,
    });
  }

  getRead(readValue) {
    this.setState({
      read: readValue,
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h4>Add A Book</h4>
        <FormTitle titleHandler={this.getTitle} />
        <FormAuthor authorHandler={this.getAuthor} />
        <FormPages pagesHandler={this.getPages} />
        <FormRead readHandler={this.getRead} />
        <FormSubmit />
      </form>
    );
  }
}

export default Form;
