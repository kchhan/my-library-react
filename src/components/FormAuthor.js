import React from 'react';

class FormAuthor extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='author'>Author</label>
        <input
          type='text'
          id='author'
          className='u-full-width'
          onChange={(e) => this.props.authorHandler(e.target.value)}
        />
      </div>
    );
  }
}

export default FormAuthor;
