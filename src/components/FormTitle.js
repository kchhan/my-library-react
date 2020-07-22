import React from 'react';

class FormTitle extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor='title'>Title</label>
        <input
          required
          type='text'
          id='title'
          className='u-full-width'
          value={this.value}
          onChange={(e) => this.props.titleHandler(e.target.value)}
        />
      </div>
    );
  }
}

export default FormTitle;
