import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="container">
        <h1>My Library</h1>
        <Form />
        <List />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

