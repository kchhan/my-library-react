import React from "react";

class ListHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Read</th>
          <th></th>
        </tr>
      </thead>
    );
  }
}

export default ListHead;
