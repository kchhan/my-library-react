import React from "react";
import ReactDOM from "react-dom";

import Library from './components/Library'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="container">
        <h1>My Library</h1>
        <Library />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

