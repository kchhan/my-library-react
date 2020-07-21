import React from 'react';

class FormTitle extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          className='u-full-width'
          onChange={(e) => this.props.titleHandler(e.target.value)}
        />
      </div>
    );
  }
}

export default FormTitle;
