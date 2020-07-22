import React from 'react';

class FormPages extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='pages'>Pages</label>
        <input
          required
          type='number'
          id='pages'
          className='u-full-width'
          onChange={(e) => this.props.pagesHandler(e.target.value)}
        />
      </div>
    );
  }
}

export default FormPages;
