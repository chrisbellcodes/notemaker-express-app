import React from "react";
import Note from "../components/Note";

class Notes extends React.Component {
  componentDidMount() {
    console.log("We did mount!");
  }

  render() {
    return (
      <React.Fragment>
        <h2>NOTES YAS</h2>
        <Note />
      </React.Fragment>
    );
  }
}

export default Notes;
