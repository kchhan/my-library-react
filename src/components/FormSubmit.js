import React from "react";

class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          type="submit"
          value="submit"
          id="submit"
          className="u-full-width"
        />
      </div>
    );
  }
}

export default FormSubmit;
