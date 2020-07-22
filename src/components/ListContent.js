import React from 'react';
import uniqueId from 'react-html-id';

class ListContent extends React.Component {
  constructor(props) {
    super(props);
    uniqueId.enableUniqueIds(this);
  }
  render() {
    const books = this.props.bookData.map((book) => {
      this.nextUniqueId(); // Generate next unique id
      return (
        <tr key={this.lastUniqueId()}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.pages}</td>
          <td>{book.read}</td>
          <td>
            <a href='#' onClick={() => this.props.deleteHandler(book)}>
              x
            </a>
          </td>
        </tr>
      );
    });

    return <tbody id='book-list'>{books}</tbody>;
  }
}

export default ListContent;
