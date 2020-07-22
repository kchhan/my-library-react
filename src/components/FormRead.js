import React from 'react';

class FormRead extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='read'>Read</label>
        <select
          id='read'
          className='u-full-width'
          onChange={(e) => this.props.readHandler(e.target.value)}
        >
          <option value=''>--</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>
      </div>
    );
  }
}

export default FormRead;
