import React from 'react';

class FormRead extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='read'>Title</label>
        <select
          id='read'
          className='u-full-width'
          onChange={(e) => this.props.readHandler(e.target.value)}
        >
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
      </div>
    );
  }
}

export default FormRead;
