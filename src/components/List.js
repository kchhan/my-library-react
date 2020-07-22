import React from 'react';

import ListHead from './ListHead';
import ListContent from './ListContent';

class List extends React.Component {
  render() {
    const books = this.props.bookData;
    return (
      <table className='u-full-width'>
        <ListHead />
        <ListContent
          bookData={books}
          deleteHandler={(book) => this.props.submitDelete(book)}
        />
      </table>
    );
  }
}

export default List;
