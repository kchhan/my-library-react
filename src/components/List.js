import React from "react";

import ListHead from "./ListHead";
import ListContent from "./ListContent";

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table className="u-full-width">
        <ListHead />
        <ListContent />
      </table>
    );
  }
}

export default List;
